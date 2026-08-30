const fs = require('fs');
const c = fs.readFileSync('d:\\Users\\南洛\\Desktop\\NanLuo321.github.io-master\\src\\pages\\w10.html', 'utf-8');
const scriptStart = c.indexOf('<script>') + 8;
const scriptEnd = c.indexOf('</script>');
const script = c.substring(scriptStart, scriptEnd);

// Try to parse the full script
try {
  new Function(script);
  console.log('Full script: OK');
} catch (e) {
  console.log('Full script error:', e.message);
  console.log('Stack:', e.stack);
}

// Try parsing with a wrapper that doesn't have function declarations
try {
  new Function('"use strict"; ' + script);
  console.log('With strict mode: OK');
} catch (e) {
  console.log('With strict mode error:', e.message);
}

// Try eval
try {
  eval(script);
  console.log('eval: OK');
} catch (e) {
  console.log('eval error:', e.message);
}

// Try parsing the script as a module
try {
  const vm = require('vm');
  vm.compileFunction(script, []);
  console.log('vm.compileFunction: OK');
} catch (e) {
  console.log('vm.compileFunction error:', e.message);
  console.log('Stack:', e.stack);
}

// Try a different approach: wrap in a try-catch
try {
  // Parse each top-level statement
  const acorn = null;
  console.log('Acorn not available');
} catch (e) {
  // ignore
}

// Let's manually check for issues by looking at the script
// Count braces
let depth = 0;
let minDepth = 0;
for (let i = 0; i < script.length; i++) {
  if (script[i] === '{') depth++;
  if (script[i] === '}') {
    depth--;
    if (depth < minDepth) {
      minDepth = depth;
      console.log('Extra closing brace at position', i);
      console.log('Context:', script.substring(Math.max(0, i - 50), i + 50));
      break;
    }
  }
}
console.log('Final brace depth:', depth, 'min depth:', minDepth);

// Check for string literals that might be unterminated
let inSingleQuote = false, inDoubleQuote = false, inTemplate = false;
for (let i = 0; i < script.length; i++) {
  const ch = script[i];
  const prev = i > 0 ? script[i-1] : '';
  
  if (ch === "'" && !inDoubleQuote && !inTemplate && prev !== '\\') inSingleQuote = !inSingleQuote;
  if (ch === '"' && !inSingleQuote && !inTemplate && prev !== '\\') inDoubleQuote = !inDoubleQuote;
  if (ch === '`' && !inSingleQuote && !inDoubleQuote && prev !== '\\') inTemplate = !inTemplate;
}
console.log('String state: singleQuote=', inSingleQuote, 'doubleQuote=', inDoubleQuote, 'template=', inTemplate);

// Check for regex literals that might be unterminated
// Simple check: look for the pattern /[^/]/ after operators
// This is too complex, skip