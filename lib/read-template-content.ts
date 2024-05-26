import fs from 'node:fs/promises';
import path from 'node:path';

export async function readTemplateContent() {
    const content = await fs.readFile(path.resolve(__dirname, 'template', 'template.md'), {
        encoding: 'utf-8'
    });
    return content;
}