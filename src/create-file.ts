import fs from 'fs/promises';
import path from 'path';
import { generate_file_number } from './generate-file-number';

export async function create_file(fileName: string, text_content: string) {
  try {
    await fs.access(path.resolve(process.cwd(), 'docs'));
    await fs.appendFile(path.resolve(process.cwd(), 'docs', `${await generate_file_number()}-${fileName}.md`), text_content, {
      encoding: 'utf-8'
    });
  } catch {
    await fs.mkdir(path.resolve(process.cwd(), 'docs'));
    await fs.appendFile(path.resolve(process.cwd(), 'docs', `${await generate_file_number()}-${fileName}.md`), text_content, {
      encoding: 'utf-8'
    });
  }
}