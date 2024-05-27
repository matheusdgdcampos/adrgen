const fs = require('node:fs');
const path = require('node:path');

const templateDir = path.resolve(__dirname, '..', 'dist', 'lib', 'template');
fs.mkdirSync(templateDir);

const templateFileSource = path.resolve(__dirname, '..', 'lib', 'template', 'template.md');
const templateFileDest = path.resolve(__dirname, '..', 'dist', 'lib', 'template', 'template.md');
fs.copyFileSync(
    templateFileSource,
    templateFileDest,
);