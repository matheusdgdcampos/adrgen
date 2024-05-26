import { describe, it, expect } from 'vitest';

import { readTemplateContent } from '../lib/read-template-content';

describe('readTemplateContent', () => {
    it('Should be able to load template content', async () => {
        const content = await readTemplateContent();
        expect(content).not.toBeUndefined();
        expect(content).toBeTypeOf('string');
        expect(content.match(/[date]/)).toBeDefined()
        expect(content.match(/[date]/)?.length).not.toBe(0)
        expect(content.match(/[title]/)).toBeDefined()
        expect(content.match(/[title]/)?.length).not.toBe(0)
        expect(content.match(/[context]/)).toBeDefined()
        expect(content.match(/[context]/)?.length).not.toBe(0)
        expect(content.match(/[decision]/)).toBeDefined()
        expect(content.match(/[decision]/)?.length).not.toBe(0)
        expect(content.match(/[consequence]/)).toBeDefined()
        expect(content.match(/[consequence]/)?.length).not.toBe(0)
    });
});