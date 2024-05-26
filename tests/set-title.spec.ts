import { describe, expect, it, beforeAll } from 'vitest';
import fs from 'node:fs/promises';
import path from 'node:path';

import { setTitle } from '../lib/set-title';

describe('setTitle', () => {
    let templateContent: string;
    const templateFilePath = path.resolve(process.cwd(), 'lib', 'template', 'template.md');

    beforeAll(async () => {
        templateContent = await fs.readFile(templateFilePath, { encoding: 'utf-8' });
    });

    it('Should be able to generate record with title sentence', () => {
        const titleVar = 'any title';
        const title = setTitle(titleVar, templateContent);
        expect(title).toBeDefined();
        expect(title?.match(titleVar)).toHaveLength(1);
    });

    it('Should not be able to generate title sentence', () => {
        expect(setTitle('', templateContent)).toBeUndefined();
    });
});