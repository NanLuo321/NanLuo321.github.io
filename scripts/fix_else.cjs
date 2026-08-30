const fs = require('fs');
const c = fs.readFileSync('d:\\Users\\南洛\\Desktop\\NanLuo321.github.io-master\\src\\pages\\w10.html', 'utf-8');
const scriptStart = c.indexOf('<script>') + 8;
const scriptEnd = c.indexOf('</script>');
const script = c.substring(scriptStart, scriptEnd);
const lines = script.split('\n');

// Find where the if-else chain should start
// Look for the first "if (type === " before the else if chain
console.log('Looking for the start of the if-else chain...');
for (let i = 1790; i >= 1700; i--) {
  if (lines[i].includes('if (type ===') || lines[i].includes('if (type===')) {
    console.log('Found if at line', i+1, ':', lines[i]);
    break;
  }
}

// Show the context from line 1750 to 1805
console.log('\nLines 1750-1805:');
for (let i = 1749; i < 1805 && i < lines.length; i++) {
  console.log('Line', i+1, ':', lines[i]);
}

// The issue is: the renderAppContent function ends but the if-else chain
// from the settings page was placed after the function, not inside it.
// Let me find where the renderAppContent function starts and ends

// Find renderAppContent
let renderStart = -1, renderEnd = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('function renderAppContent')) {
    renderStart = i;
  }
  if (renderStart >= 0 && lines[i].includes('function bindResolutionSelect')) {
    renderEnd = i - 1;
    break;
  }
}
console.log('\nrenderAppContent from line', renderStart+1, 'to', renderEnd+1);
if (renderStart >= 0 && renderEnd >= 0) {
  console.log('Last line of renderAppContent:', lines[renderEnd]);
  console.log('First line after renderAppContent:', lines[renderEnd+1]);
}

// The problem is clear: the else if chain (lines 1802+) is OUTSIDE of any function
// They should be INSIDE the renderAppContent function
// But the renderAppContent function was already properly closed

// The fix: the settings page code was inserted incorrectly. The else if chain
// for mail, calendar, photos, store, rtmp, vlc was placed at the top level,
// outside of renderAppContent function.

// These else if statements need to be removed or wrapped in an if statement.
// Since they can't work without a preceding if, we need to either:
// 1. Remove them
// 2. Or convert them to regular if statements

// Let me find the complete range of the dangling else-if chain
let chainEnd = 1802;
for (let i = 1802; i < lines.length; i++) {
  if (lines[i].includes('else if (type ===') || lines[i].trim() === '}' || lines[i].includes('function renderSettingsPage')) {
    if (lines[i].trim() === '}' && !lines[i+1]?.includes('else')) {
      chainEnd = i;
      break;
    }
  }
  if (lines[i].includes('function renderSettingsPage')) {
    chainEnd = i - 1;
    break;
  }
}
console.log('\nDangling else-if chain from line', 1802, 'to', chainEnd+1);
for (let i = 1801; i <= chainEnd + 3 && i < lines.length; i++) {
  console.log('Line', i+1, ':', lines[i]);
}