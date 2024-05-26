import { describe, expect, it, beforeAll } from 'vitest';
import fs from 'node:fs/promises';
import path from 'node:path';

import { setContext } from '../lib/set-context';

describe('setContext', () => {
    let templateContent: string;
    const templateFilePath = path.resolve(process.cwd(), 'lib', 'template', 'template.md');

    beforeAll(async () => {
        templateContent = await fs.readFile(templateFilePath, { encoding: 'utf-8' });
    });

    it('Should be able to generate record with context sentence', () => {
        const contextVar = 'any context';
        const context = setContext(contextVar, templateContent);
        expect(context).toBeDefined()
        expect(context?.match(contextVar)).toHaveLength(1);
    });

    it('Should not be able to generate context sentence', () => {
        expect(setContext('', templateContent)).toBeUndefined();
    });
});