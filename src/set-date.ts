import path from 'path';
import fs from 'fs/promises';
import { formatISO } from 'date-fns';

export async function set_date() {
  const text_content = await fs.readFile(path.resolve(__dirname, 'template', 'template.md'), {
    encoding: 'utf-8'
  });
  return text_content.replace(/\[date\]/g, formatISO(new Date(), {
    representation: 'date'
  }));
}

