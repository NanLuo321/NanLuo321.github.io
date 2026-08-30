const fs = require('fs');
const c = fs.readFileSync('d:\\Users\\南洛\\Desktop\\NanLuo321.github.io-master\\src\\pages\\w10.html', 'utf-8');
const scriptStart = c.indexOf('<script>') + 8;
const scriptEnd = c.indexOf('</script>');
const script = c.substring(scriptStart, scriptEnd);

// Binary search for the exact error
let low = 0, high = 5000;
while (low < high) {
  const mid = Math.floor((low + high) / 2);
  try {
    new Function(script.substring(0, mid));
    low = mid + 1;
  } catch (e) {
    high = mid;
  }
}
console.log('Error position in script:', low);

// Show context around the error
const start = Math.max(0, low - 60);
const end = Math.min(script.length, low + 60);
console.log('Context:');
console.log('---');
console.log(script.substring(start, end));
console.log('---');
console.log('Char codes around error:');
for (let i = low - 5; i < low + 5 && i < script.length; i++) {
  console.log('  [' + i + '] char=' + JSON.stringify(script[i]) + ' code=' + script.charCodeAt(i));
}

// Also check the line number
const lines = script.substring(0, low).split('\n');
console.log('\nLine number:', lines.length);
console.log('Last 3 lines before error:');
for (let i = Math.max(0, lines.length - 4); i < lines.length; i++) {
  console.log('  Line', i + 1, ':', lines[i]);
}

// Show the next few lines
const nextLines = script.substring(low).split('\n');
console.log('First 3 lines after error:');
for (let i = 0; i < Math.min(3, nextLines.length); i++) {
  console.log('  Line', i + 1, ':', nextLines[i]);
}