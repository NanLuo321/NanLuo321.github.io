const fs = require('fs');
const vm = require('vm');
const c = fs.readFileSync('d:\\Users\\南洛\\Desktop\\NanLuo321.github.io-master\\src\\pages\\w10.html', 'utf-8');
const s = c.indexOf('<script>') + 8;
const e = c.indexOf('</script>');
const script = c.substring(s, e);

// Binary search for the exact error position
let low = 0;
let high = script.length;

// First verify there is an error
try {
  vm.compileFunction(script, []);
  console.log('No error found! Script is valid.');
  process.exit(0);
} catch (err) {
  console.log('Error confirmed:', err.message);
}

// Binary search
while (low < high) {
  const mid = Math.floor((low + high) / 2);
  try {
    vm.compileFunction(script.substring(0, mid), []);
    low = mid + 1;
  } catch (err) {
    high = mid;
  }
}

console.log('\nError position in script (char index):', low);
console.log('Error context (50 chars before):', JSON.stringify(script.substring(Math.max(0, low - 50), low)));
console.log('Error context (50 chars after):', JSON.stringify(script.substring(low, low + 50)));

// Find line number
const lines = script.substring(0, low).split('\n');
const lineNum = lines.length;
console.log('\nLine number:', lineNum);

// Show surrounding lines
const allLines = script.split('\n');
console.log('\nSurrounding lines:');
for (let i = Math.max(0, lineNum - 10); i < Math.min(allLines.length, lineNum + 5); i++) {
  const marker = i === lineNum - 1 ? '>>> ' : '    ';
  console.log(marker + 'L' + (i+1) + ': ' + allLines[i].substring(0, 100));
}