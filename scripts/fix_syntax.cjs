const fs = require('fs');
const c = fs.readFileSync('d:\\Users\\南洛\\Desktop\\NanLuo321.github.io-master\\src\\pages\\w10.html', 'utf-8');

// Extract the script
const scriptStart = c.indexOf('<script>') + 8;
const scriptEnd = c.indexOf('</script>');
const script = c.substring(scriptStart, scriptEnd);

const lines = script.split('\n');

// Find the else issue around line 896
console.log('=== Lines 890-910 ===');
for (let i = 889; i < 910 && i < lines.length; i++) {
  console.log('Line', i + 1, ':', lines[i]);
}

// Check for the "Invalid or unexpected token" at the beginning
console.log('\n=== First 20 chars of script ===');
console.log(JSON.stringify(script.substring(0, 20)));
console.log('Char codes:', script.substring(0, 10).split('').map(c => c.charCodeAt(0)));

// Check for BOM characters
const bomCheck = script.charCodeAt(0);
console.log('First char code:', bomCheck, bomCheck === 0xFEFF ? '(BOM)' : '(normal)');

// Check for non-breaking spaces or other invisible chars
for (let i = 0; i < 50; i++) {
  const code = script.charCodeAt(i);
  if (code > 127 && code !== 10 && code !== 13 && code !== 32) {
    console.log('Non-ASCII at', i, ':', code, String.fromCharCode(code));
  }
}