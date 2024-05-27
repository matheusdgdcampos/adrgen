import { describe, expect, it } from "vitest";

import { setAppLanguage } from '../lib/set-app-language';

describe('setAppLanguage', () => {
    it('Should be able to select default app language', async () => {
        const language = await setAppLanguage('');
        expect(language.title).toBe((await import('../lib/lang/en_us.json')).title);
        expect(language.decision).toBe((await import('../lib/lang/en_us.json')).decision);
        expect(language.context).toBe((await import('../lib/lang/en_us.json')).context);
        expect(language.consequence).toBe((await import('../lib/lang/en_us.json')).consequence);
    });

    it('Should be able to select language pt_br', async () => {
        const language = await setAppLanguage('pt_br');
        expect(language.title).toBe((await import('../lib/lang/pt_br.json')).title);
        expect(language.decision).toBe((await import('../lib/lang/pt_br.json')).decision);
        expect(language.context).toBe((await import('../lib/lang/pt_br.json')).context);
        expect(language.consequence).toBe((await import('../lib/lang/pt_br.json')).consequence);
    });

    it('Should be able to select language en_us', async () => {
        const language = await setAppLanguage('en_us');
        expect(language.title).toBe((await import('../lib/lang/en_us.json')).title);
        expect(language.decision).toBe((await import('../lib/lang/en_us.json')).decision);
        expect(language.context).toBe((await import('../lib/lang/en_us.json')).context);
        expect(language.consequence).toBe((await import('../lib/lang/en_us.json')).consequence);
    });

    it('Should be able to select language es_es', async () => {
        const language = await setAppLanguage('es_es');
        expect(language.title).toBe((await import('../lib/lang/es_es.json')).title);
        expect(language.decision).toBe((await import('../lib/lang/es_es.json')).decision);
        expect(language.context).toBe((await import('../lib/lang/es_es.json')).context);
        expect(language.consequence).toBe((await import('../lib/lang/es_es.json')).consequence);
    });

    it('Should not be able to select language', async () => {
        const language = await setAppLanguage('wrong_language');
        expect(language.title).toBe((await import('../lib/lang/en_us.json')).title);
        expect(language.decision).toBe((await import('../lib/lang/en_us.json')).decision);
        expect(language.context).toBe((await import('../lib/lang/en_us.json')).context);
        expect(language.consequence).toBe((await import('../lib/lang/en_us.json')).consequence);
    });
});