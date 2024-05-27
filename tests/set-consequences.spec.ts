import { describe, expect, it, beforeAll } from 'vitest';
import fs from 'node:fs/promises';
import path from 'node:path';

import { setConsequence } from '../lib/set-consequences';

describe('setConsequence', () => {
    let templateContent: string;
    const templateFilePath = path.resolve(process.cwd(), 'lib', 'template', 'template.md');

    beforeAll(async () => {
        templateContent = await fs.readFile(templateFilePath, { encoding: 'utf-8' });
    });

    it('Should be able to generate record with consequence sentence', () => {
        const consequenceVar = 'any consequence';
        const consequence = setConsequence(consequenceVar, templateContent);
        expect(consequence).toBeDefined()
        expect(consequence?.match(consequenceVar)).toHaveLength(1);
    });
});