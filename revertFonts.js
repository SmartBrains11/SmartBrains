const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = [
  ...walk('c:\\Users\\user\\Desktop\\SB\\app'),
  ...walk('c:\\Users\\user\\Desktop\\SB\\components')
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  // Revert font-black to font-bold for anything that DOES NOT contain text-4xl or larger.
  // We'll iterate over every className that contains font-black
  content = content.replace(/className=(['"][^'"]*font-black[^'"]*['"])/g, (match, param1) => {
    if (!param1.match(/text-(4xl|5xl|6xl|7xl|8xl)/)) {
      return 'className=' + param1.replace(/font-black/g, 'font-bold');
    }
    return match;
  });

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Reverted in ${file}`);
  }
});
