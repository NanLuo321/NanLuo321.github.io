const fs = require('fs');
const c = fs.readFileSync('d:\\Users\\南洛\\Desktop\\NanLuo321.github.io-master\\src\\pages\\w10.html', 'utf-8');
const s = c.indexOf('<script>') + 8;
const e = c.indexOf('</script>');
const script = c.substring(s, e);

// Try parsing with different wrappers
// First, let's try wrapping in a function to see if that changes the error
try {
  new Function(script);
  console.log('Direct: OK');
} catch (err) {
  console.log('Direct error:', err.message);
}

// Try with eval
try {
  eval('(function(){' + script + '})');
  console.log('Eval wrapped: OK');
} catch (err) {
  console.log('Eval wrapped error:', err.message);
}

// The issue might be that the script uses 'var' at the top level which is fine
// Let's try a different approach: parse line by line
const lines = script.split('\n');
let cumulative = '';
let errorLine = -1;

for (let i = 0; i < lines.length; i++) {
  cumulative += lines[i] + '\n';
  try {
    new Function(cumulative);
  } catch (err) {
    // If we get an "Unexpected end of input" error, that's expected for partial code
    if (err.message.includes('Unexpected end of input') || err.message.includes('Unexpected token')) {
      // Check if it's a real error (not just end of input)
      if (!err.message.includes('Unexpected end of input')) {
        errorLine = i + 1;
        console.log('First real error at line', errorLine);
        console.log('Error:', err.message);
        console.log('Line content:', lines[i]);
        console.log('Previous 5 lines:');
        for (let j = Math.max(0, i-5); j < i; j++) {
          console.log('  L' + (j+1) + ': ' + lines[j]);
        }
        break;
      }
    }
  }
}

if (errorLine === -1) {
  console.log('No error found with line-by-line approach');
}