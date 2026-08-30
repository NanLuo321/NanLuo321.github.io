const fs = require('fs');
const c = fs.readFileSync('d:\\Users\\南洛\\Desktop\\NanLuo321.github.io-master\\src\\pages\\w10.html', 'utf-8');

// Extract the script content
const scriptStart = c.indexOf('<script>') + 8;
const scriptEnd = c.indexOf('</script>');
const script = c.substring(scriptStart, scriptEnd);

console.log('Script length:', script.length);

// Try to parse the script
try {
  new Function(script);
  console.log('Script parses OK - no syntax errors');
} catch (e) {
  console.log('SYNTAX ERROR:', e.message);
  // Find the error location
  const match = e.message.match(/at (\d+)/);
  if (match) {
    const errPos = parseInt(match[1]);
    console.log('Error position:', errPos);
    // Show context around the error
    const start = Math.max(0, errPos - 100);
    const end = Math.min(script.length, errPos + 100);
    console.log('Context:');
    console.log(script.substring(start, end));
    
    // Find line number
    const lines = script.substring(0, errPos).split('\n');
    console.log('Line number:', lines.length);
    console.log('Error line:', lines[lines.length - 1]);
    console.log('Next line:', script.split('\n')[lines.length]);
  }
}