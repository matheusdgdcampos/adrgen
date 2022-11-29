import fs from 'fs/promises';
import path from 'path';
import { generateFileNumber } from './generate-file-number';

export async function createFile(fileName: string, text_content: string) {
  try {
    await fs.access(path.resolve(process.cwd(), 'docs'));
    await fs.appendFile(path.resolve(process.cwd(), 'docs', `${await generateFileNumber()}-${fileName}.md`), text_content, {
      encoding: 'utf-8'
    });
  } catch {
    await fs.mkdir(path.resolve(process.cwd(), 'docs'));
    await fs.appendFile(path.resolve(process.cwd(), 'docs', `${await generateFileNumber()}-${fileName}.md`), text_content, {
      encoding: 'utf-8'
    });
  }
}