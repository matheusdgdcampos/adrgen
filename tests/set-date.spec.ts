import { describe, expect, it, beforeAll } from 'vitest';
import fs from 'node:fs/promises';
import path from 'node:path';

import { setDate } from '../lib/set-date';
import { generateDate } from '../lib/utils/generate-date';

describe('setDate', () => {
    let templateContent: string;
    const templateFilePath = path.resolve(process.cwd(), 'lib', 'template', 'template.md');

    beforeAll(async () => {
        templateContent = await fs.readFile(templateFilePath, { encoding: 'utf-8' });
    });

    it('Should be able to generate record with date sentence', async () => {
        const dateGenerated = generateDate();
        const content = setDate(templateContent);
        expect(content).toBeDefined()
        expect(content.match(dateGenerated)).toHaveLength(1);
    });
});