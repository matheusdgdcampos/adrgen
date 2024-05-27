import { describe, it, beforeEach, afterEach, expect } from 'vitest';
import path from 'node:path';
import fs from 'node:fs/promises';

import { generateFileNumber } from '../lib/generate-file-number';

describe('generateFileNumber', () => {
    const tempDocsFolderPath = path.resolve(process.cwd(), 'docs');

    beforeEach(async () => {
        await fs.mkdir(tempDocsFolderPath, { recursive: true });
    });

    afterEach(async () => {
        await fs.rm(tempDocsFolderPath, { recursive: true });
    });

    it('Should be able to create first generated number', async () => {
        const firstGeneratedNumber = await generateFileNumber()
        expect(firstGeneratedNumber).toBe('0001');
    });

    it('Should be able to generate sequencial number', async () => {
        const firstGeneratedNumber = await generateFileNumber();
        await fs.appendFile(path.resolve(tempDocsFolderPath, '0001-temp-file.md'), 'lorem ipsum');
        const secondGeneratedNumber = await generateFileNumber();
        expect(firstGeneratedNumber).not.toEqual(secondGeneratedNumber)
        expect(firstGeneratedNumber).toBe('0001');
        expect(secondGeneratedNumber).toBe('0002');
    });
});