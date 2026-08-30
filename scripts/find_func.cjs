const fs = require('fs');
const c = fs.readFileSync('d:\\Users\\南洛\\Desktop\\NanLuo321.github.io-master\\src\\pages\\w10.html', 'utf-8');
const scriptStart = c.indexOf('<script>') + 8;
const scriptEnd = c.indexOf('</script>');
const script = c.substring(scriptStart, scriptEnd);
const lines = script.split('\n');

// Find the function containing line 896
// Go backwards from line 896 to find the enclosing function
let braceDepth = 0;
let funcStartLine = 0;
for (let i = 895; i >= 0; i--) {
  // Count braces in this line
  for (const ch of lines[i]) {
    if (ch === '}') braceDepth++;
    if (ch === '{') braceDepth--;
  }
  if (braceDepth === 0 && lines[i].includes('function')) {
    funcStartLine = i + 1;
    break;
  }
}
console.log('The else chain is inside a function starting at line', funcStartLine);
console.log('Function declaration:', lines[funcStartLine - 1]);

// Check if the function is properly closed
// Count braces from funcStartLine to line 896
let bd = 0;
for (let i = funcStartLine - 1; i < 896; i++) {
  for (const ch of lines[i]) {
    if (ch === '{') bd++;
    if (ch === '}') bd--;
  }
}
console.log('Brace depth at line 896:', bd);

// Now let's also check if the FIRST chunk error is actually the same issue
// Let's try parsing the script differently
// The issue might be that the script has a BOM or some invisible character

// Let me try a different approach: look for the error with a more precise method
// Try parsing small chunks at the beginning
console.log('\n=== Testing first 1000 chars ===');
try {
  new Function(script.substring(0, 1000));
  console.log('First 1000 chars OK');
} catch (e) {
  console.log('Error in first 1000 chars:', e.message);
  // Binary search within first 1000
  let low = 0, high = 1000;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    try {
      new Function(script.substring(0, mid));
      low = mid + 1;
    } catch (e) {
      high = mid;
    }
  }
  console.log('Error position: ~', low);
  console.log('Context:', script.substring(Math.max(0, low - 50), low + 50));
  console.log('Char codes:', script.substring(low - 5, low + 5).split('').map(c => c.charCodeAt(0)));
}

// Let me try the full script with just the first 50000 chars
console.log('\n=== Testing first 50000 chars ===');
try {
  new Function(script.substring(0, 50000));
  console.log('First 50000 chars OK');
} catch (e) {
  console.log('Error:', e.message);
}

// Let me try a different approach - use eval
console.log('\n=== Testing with eval on first 50000 chars ===');
try {
  eval(script.substring(0, 50000));
  console.log('eval OK');
} catch (e) {
  console.log('eval error at line', e.lineNumber || 'unknown', ':', e.message);
}

// Let's also check for the "else" issue in the context of the full script
// Try with a wrapper that properly handles the if-else chain
console.log('\n=== Testing the if-else chain context ===');
// Show lines 880-900
for (let i = 879; i < 900; i++) {
  console.log('Line', i+1, ':', lines[i]);
}