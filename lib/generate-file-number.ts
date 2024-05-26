import fs from 'node:fs/promises';
import path from 'node:path';

export async function generateFileNumber() {
    const directory = await fs.readdir(path.resolve(process.cwd(), 'docs'), {
        encoding: 'utf-8'
    });

    if (directory.length > 0) {
        const numbers = directory.map((file) => {
            const splited = file.split('-');
            return parseInt(splited[0]);
        });
        const sortedNumbers = numbers.sort((a, b) => b - a);
        return (Number(sortedNumbers.shift()) + 1).toString().padStart(4, '0')
    }

    return '0001';
}