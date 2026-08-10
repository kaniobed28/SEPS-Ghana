const fs = require('fs');
const path = require('path');

const directory = 'c:/Users/PC/Desktop/space/src';

const replacements = [
  { regex: /Space Exploration and Physics Society( – Ghana| - Ghana)?(\s*\(SEPS-Ghana\))?/g, replacement: 'Space Research Institute Ghana (SRIG)' },
  { regex: /SEPS-Ghana/g, replacement: 'SRIG' },
  { regex: /SEPS/g, replacement: 'SRIG' },
];

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;
  
  replacements.forEach(({ regex, replacement }) => {
    newContent = newContent.replace(regex, replacement);
  });
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      replaceInFile(fullPath);
    }
  }
}

traverseDir(directory);
