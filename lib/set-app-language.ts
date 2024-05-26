import process from 'node:process';

import { Message } from './errors/message';

export type LanguageResult = {
    title: string;
    context: string;
    decision: string;
    consequence: string;
}

export async function setAppLanguage(prompt: string): Promise<LanguageResult | void> {
    if (prompt === 'es_es') {
        const { consequence, context, decision, title } = await import('./lang/es_es.json');
        return {
            consequence,
            context,
            decision,
            title
        }
    }

    if (prompt === 'pt_br') {
        const { consequence, context, decision, title } = await import('./lang/pt_br.json');
        return {
            consequence,
            context,
            decision,
            title
        }
    }

    if (prompt === 'en_us') {
        const { consequence, context, decision, title } = await import('./lang/en_us.json');
        return {
            consequence,
            context,
            decision,
            title
        }
    }

    if (prompt.length === 0) {
        const { consequence, context, decision, title } = await import('./lang/en_us.json');
        return {
            consequence,
            context,
            decision,
            title
        }
    }

    if (prompt !== 'pt_br' || 'en_us' || 'es_es') {
        Message.error('Language selected must be [pt_br]Portuguese(Brazilian) [en_us]English [es_es]Spanish')
        return process.exit(1);
    }
}