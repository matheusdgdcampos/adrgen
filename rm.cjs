const fs = require('fs');
const path = require('path');

const directoryExists = fs.existsSync(path.resolve(__dirname, 'dist'));

if (directoryExists) {
  fs.rmSync(path.resolve(__dirname, 'dist'), {
    recursive: true
  });
  process.exit(0);
}

process.exit(0);