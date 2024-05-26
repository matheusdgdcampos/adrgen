import { describe, it, expect, afterEach } from 'vitest';
import fs from 'node:fs/promises';
import path from 'node:path';

import { createFile } from '../lib/create-file';

describe('createFile', () => {
    const fileName = 'vitest';
    const fileContent = 'testing file creation';
    const tempDocsDirectoryPath = path.resolve(process.cwd(), 'docs');

    afterEach(async () => {
        await fs.rm(tempDocsDirectoryPath, { recursive: true });
    })

    it('Should be able to create new file of doc', async () => {
        await createFile(fileName, fileContent);
        const contentPath = path.resolve(process.cwd(), 'docs', `0001-${fileName}.md`);
        const content = await fs.readFile(contentPath, { encoding: 'utf-8' });
        expect(content).toEqual(fileContent);
    })
})