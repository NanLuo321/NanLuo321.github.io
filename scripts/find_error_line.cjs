const fs = require('fs');
const c = fs.readFileSync('d:\\Users\\南洛\\Desktop\\NanLuo321.github.io-master\\src\\pages\\w10.html', 'utf-8');
const scriptStart = c.indexOf('<script>') + 8;
const scriptEnd = c.indexOf('</script>');
const script = c.substring(scriptStart, scriptEnd);
const lines = script.split('\n');

console.log('Lines around 1802:');
for (let i = 1795; i < 1820 && i < lines.length; i++) {
  console.log('Line', i + 1, ':', lines[i]);
}

// Now let's also check the context of the renderAppContent function
// which contains the app icons
console.log('\n=== Finding the if-else chain ===');
for (let i = 1790; i < 1900 && i < lines.length; i++) {
  if (lines[i].includes('type ===') || lines[i].includes('else if') || lines[i].includes('if (type')) {
    console.log('Line', i + 1, ':', lines[i]);
  }
}