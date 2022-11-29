const fs = require('fs');
const path = require('path');

fs.mkdirSync(path.resolve(__dirname, 'dist', 'lib', 'template'));


fs.copyFileSync(
  path.resolve(__dirname, 'lib', 'template', 'template.md'),
  path.resolve(__dirname, 'dist', 'lib', 'template', 'template.md'),
);