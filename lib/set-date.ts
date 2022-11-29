import fs from 'fs/promises';
import path from 'path';

import { generateDate } from './utils/generate-date';

export async function setDate() {
  const text_content = await fs.readFile(path.resolve(__dirname, 'template', 'template.md'), {
    encoding: 'utf-8'
  });
  return text_content.replace(/\[date\]/g, generateDate());
}

