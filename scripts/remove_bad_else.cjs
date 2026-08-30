const fs = require('fs');
const c = fs.readFileSync('d:\\Users\\南洛\\Desktop\\NanLuo321.github.io-master\\src\\pages\\w10.html', 'utf-8');
const scriptStart = c.indexOf('<script>') + 8;
const scriptEnd = c.indexOf('</script>');
const script = c.substring(scriptStart, scriptEnd);
const lines = script.split('\n');

// Find the else-if chain and where it ends
// It starts at line 1802: else if (type === 'mail') {
// Let's find where it ends - look for next function declaration or the settings page code

let chainEnd = 1802;
let braceDepth = 0;
let inChain = false;

for (let i = 1801; i < lines.length; i++) {
  const line = lines[i];
  // Count braces
  for (const ch of line) {
    if (ch === '{') braceDepth++;
    if (ch === '}') braceDepth--;
  }
  
  // Check if we're entering a new function
  if (line.includes('function ') && line.includes('{') && i > 1802) {
    chainEnd = i - 1;
    break;
  }
  
  // Check if we've reached the end of the else-if chain
  if (i > 1802 && !line.includes('else if') && !line.includes('else') && braceDepth === 0 && line.trim() !== '') {
    chainEnd = i;
    break;
  }
  
  // If we're back to brace depth 0 and not in an else if, we're done
  if (braceDepth === 0 && i > 1802 && !line.includes('else if') && !line.includes('else') && !line.includes('{') && !line.includes('}')) {
    chainEnd = i;
    break;
  }
}

console.log('Dangling else-if chain from line 1802 to', chainEnd);
for (let i = 1801; i <= chainEnd + 2 && i < lines.length; i++) {
  console.log('Line', i+1, ':', lines[i]);
}

// Find the exact text in the file to remove
const fileLines = c.split('\n');
const scriptStartLine = c.substring(0, scriptStart).split('\n').length - 1; // 0-indexed
const fileLineStart = scriptStartLine + 1801; // 0-indexed line in file
const fileLineEnd = scriptStartLine + chainEnd; // 0-indexed

console.log('\nFile lines to remove:', fileLineStart + 1, 'to', fileLineEnd + 1);
console.log('Line 1802 in file:', fileLines[fileLineStart]);
console.log('Last line to remove:', fileLines[fileLineEnd]);

// Let's find the exact text to remove
// We need to find text at the beginning of the else-if chain
const searchText = `    else if (type === 'mail') {`;
console.log('\nSearching for:', searchText);
const idx = c.indexOf(searchText);
if (idx >= 0) {
  // Find the end of the else-if chain
  // Count braces from this point
  let depth = 0;
  let endIdx = idx;
  for (let i = idx; i < c.length; i++) {
    if (c[i] === '{') depth++;
    if (c[i] === '}') {
      depth--;
      if (depth === 0) {
        endIdx = i;
        break;
      }
    }
  }
  console.log('Removing from', idx, 'to', endIdx + 1);
  console.log('Text to remove:', c.substring(idx, endIdx + 1).substring(0, 200));
  
  // But we need to check if there are more else-if blocks after this one
  // The pattern is: } else if (...) { ... } else if (...) { ... } etc.
  // Let me find all consecutive else-if blocks
  let fullEndIdx = endIdx;
  while (true) {
    // Check if there's an 'else if' after the closing brace
    const afterEnd = c.substring(fullEndIdx + 1, fullEndIdx + 20);
    console.log('After end:', JSON.stringify(afterEnd));
    if (afterEnd.trim().startsWith('else if')) {
      // Find the next else if
      const nextElseIf = c.indexOf('else if', fullEndIdx + 1);
      // Find the closing brace of this else if
      let d = 0;
      let e = nextElseIf;
      for (let i = nextElseIf; i < c.length; i++) {
        if (c[i] === '{') d++;
        if (c[i] === '}') {
          d--;
          if (d === 0) {
            e = i;
            break;
          }
        }
      }
      fullEndIdx = e;
      console.log('Additional else if up to', fullEndIdx);
    } else if (afterEnd.trim().startsWith('else')) {
      // It's a plain else block
      let d = 0;
      let e = fullEndIdx + 1;
      for (let i = fullEndIdx + 1; i < c.length; i++) {
        if (c[i] === '{') d++;
        if (c[i] === '}') {
          d--;
          if (d === 0) {
            e = i;
            break;
          }
        }
      }
      fullEndIdx = e;
      console.log('Else block up to', fullEndIdx);
      break;
    } else {
      break;
    }
  }
  
  console.log('Full range to remove:', idx, 'to', fullEndIdx + 1);
  console.log('Full text to remove:', c.substring(idx, fullEndIdx + 1).substring(0, 300));
  
  // Now remove it
  const newC = c.substring(0, idx) + c.substring(fullEndIdx + 1);
  fs.writeFileSync('d:\\Users\\南洛\\Desktop\\NanLuo321.github.io-master\\src\\pages\\w10.html', newC, 'utf-8');
  console.log('\nRemoved! File saved.');
} else {
  console.log('Search text not found!');
}