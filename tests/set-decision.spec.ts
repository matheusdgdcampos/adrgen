import { describe, expect, it, beforeAll } from 'vitest';
import fs from 'node:fs/promises';
import path from 'node:path';

import { setDecision } from '../lib/set-decision';

describe('setDecision', () => {
    let templateContent: string;
    const templateFilePath = path.resolve(process.cwd(), 'lib', 'template', 'template.md');

    beforeAll(async () => {
        templateContent = await fs.readFile(templateFilePath, { encoding: 'utf-8' });
    });

    it('Should be able to generate record with decision sentence', () => {
        const decisionVar = 'any decision';
        const decision = setDecision(decisionVar, templateContent);
        expect(decision).toBeDefined();
        expect(decision?.match(decisionVar)).toHaveLength(1);
    });
});