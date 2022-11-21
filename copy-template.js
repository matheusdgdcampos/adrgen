const fs = require('fs');
const path = require('path');

fs.mkdirSync(path.resolve(__dirname, 'lib', 'src', 'template'));


fs.copyFileSync(
  path.resolve(__dirname, 'src', 'template', 'template.md'),
  path.resolve(__dirname, 'lib', 'src', 'template', 'template.md'),
);