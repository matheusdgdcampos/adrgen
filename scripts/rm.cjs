const fs = require('node:fs');
const path = require('node:path');

const buildDirectory = path.resolve(__dirname, '..', 'dist')
const directoryExists = fs.existsSync(buildDirectory);

if (directoryExists) {
    fs.rmSync(path.resolve(__dirname, '..', 'dist'), {
        recursive: true
    });
    process.exit(0);
}

process.exit(0);