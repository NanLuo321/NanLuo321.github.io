const fs = require('fs');
const c = fs.readFileSync('d:\\Users\\南洛\\Desktop\\NanLuo321.github.io-master\\src\\pages\\w10.html', 'utf-8');

// Extract the script content
const scriptStart = c.indexOf('<script>') + 8;
const scriptEnd = c.indexOf('</script>');
const script = c.substring(scriptStart, scriptEnd);

// Find the error by scanning for common patterns
// Let's look for orphaned 'else' statements
const lines = script.split('\n');
console.log('Total lines:', lines.length);

// Check for 'else' without a matching 'if'
let braceDepth = 0;
let errors = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trim();
  
  // Count braces
  for (const ch of line) {
    if (ch === '{') braceDepth++;
    if (ch === '}') braceDepth--;
  }
  
  // Check for 'else' on its own line without a preceding 'if' block
  if (trimmed.startsWith('else') && !trimmed.includes('if') && !trimmed.includes('{')) {
    const prevLine = i > 0 ? lines[i-1].trim() : '';
    if (!prevLine.endsWith('}') && !prevLine.endsWith('{') && !prevLine.endsWith(')')) {
      errors.push({ line: i + 1, text: trimmed, prev: prevLine, depth: braceDepth });
    }
  }
  
  // Check for mismatched braces
  if (braceDepth < 0) {
    errors.push({ line: i + 1, text: 'Extra closing brace', depth: braceDepth });
    braceDepth = 0;
  }
}

console.log('Final brace depth:', braceDepth);

if (errors.length > 0) {
  console.log('\nFound', errors.length, 'potential issues:');
  for (const err of errors) {
    console.log('Line', err.line, ':', err.text);
    if (err.prev) console.log('  Previous line:', err.prev);
    console.log('  Context:', lines[err.line - 1].trim());
    if (err.line >= 2) console.log('  Line before:', lines[err.line - 2].trim());
    if (err.line < lines.length) console.log('  Line after:', lines[err.line].trim());
  }
} else {
  console.log('No obvious issues found');
}

// Let's also try to find where the error actually is by splitting the script
// into chunks and testing each chunk
console.log('\n--- Binary search for error ---');
let chunkSize = 5000;
for (let start = 0; start < script.length; start += chunkSize) {
  const chunk = script.substring(start, start + chunkSize + 500);
  try {
    new Function(chunk);
  } catch (e) {
    console.log('Error in chunk starting at', start, ':', e.message.substring(0, 100));
    console.log('Chunk preview:', script.substring(start, start + 200));
    break;
  }
}