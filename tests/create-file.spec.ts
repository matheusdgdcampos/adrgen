import { describe, it, expect, afterEach } from 'vitest';
import { readFile, rm } from 'fs/promises';

import { createFile } from '../lib/create-file';

describe('createFile', () => {
  const fileName = 'vitest';
  const fileContent = 'testing file creation';

  afterEach(async () => {
    await rm(`${process.cwd()}/docs`, { recursive: true });
  })

  it('Should be able to create new file of doc', async () => {
    await createFile(fileName, fileContent);
    const content = await readFile(`${process.cwd()}/docs/0001-${fileName}.md`, { encoding: 'utf-8' });
    expect(content).toEqual(fileContent);
  })
})