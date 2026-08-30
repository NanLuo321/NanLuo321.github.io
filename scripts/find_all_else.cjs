const fs = require('fs');
const c = fs.readFileSync('d:\\Users\\南洛\\Desktop\\NanLuo321.github.io-master\\src\\pages\\w10.html', 'utf-8');
const s = c.indexOf('<script>') + 8;
const e = c.indexOf('</script>');
const script = c.substring(s, e);
const lines = script.split('\n');

// Find all else-if blocks that are at top level (not inside a function)
// Strategy: walk through the script, track function depth and brace depth
// When we see an 'else if' or 'else' at brace depth 0 and not inside a function, it's an error

let funcDepth = 0;
let braceDepth = 0;
let inString = false;
let stringChar = '';
let errors = [];
let currentFuncName = '';

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trim();
  
  // Simple string detection (not perfect but good enough)
  for (let j = 0; j < line.length; j++) {
    const ch = line[j];
    const prev = j > 0 ? line[j-1] : '';
    if (prev !== '\\') {
      if (ch === "'" && !inString) { inString = true; stringChar = "'"; }
      else if (ch === "'" && inString && stringChar === "'") { inString = false; }
      else if (ch === '"' && !inString) { inString = true; stringChar = '"'; }
      else if (ch === '"' && inString && stringChar === '"') { inString = false; }
    }
  }
  
  if (!inString) {
    // Track function declarations
    if (trimmed.includes('function ') && trimmed.includes('{')) {
      funcDepth++;
      const m = trimmed.match(/function\s+(\w+)/);
      if (m) currentFuncName = m[1];
    }
    
    // Track braces
    for (const ch of line) {
      if (ch === '{') braceDepth++;
      if (ch === '}') braceDepth--;
    }
    
    // Check for else at the wrong level
    if ((trimmed.startsWith('else if') || trimmed.startsWith('else ')) && braceDepth <= 1 && funcDepth === 0) {
      errors.push({ line: i + 1, text: trimmed.substring(0, 80), braceDepth, funcDepth });
    }
    
    // Track function closing
    if (trimmed === '}' && braceDepth === 0 && funcDepth > 0) {
      funcDepth--;
      currentFuncName = '';
    }
  }
  
  // Reset string state at line end if it's a multi-line string (unlikely but possible)
  // Actually multi-line strings with ' or " aren't valid JS, so we should reset
  if (inString && line.trim().endsWith(';')) {
    inString = false;
  }
}

console.log('Found', errors.length, 'dangling else-if blocks:');
errors.forEach(err => {
  console.log('  Line', err.line, '(depth:', err.braceDepth, 'funcDepth:', err.funcDepth, '):', err.text);
});

if (errors.length > 0) {
  // Let's look at the context around the first error
  const firstErr = errors[0];
  console.log('\nContext around first error (lines', firstErr.line - 5, '-', firstErr.line + 5, '):');
  for (let i = firstErr.line - 6; i < firstErr.line + 5 && i < lines.length; i++) {
    if (i >= 0) console.log('L' + (i+1) + ': ' + lines[i]);
  }
}