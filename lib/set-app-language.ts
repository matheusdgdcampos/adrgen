import { Logger } from './logger/logger';

export async function setAppLanguage(prompt: string) {
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

    Logger.error('Language selected must be [pt_br]Portuguese(Brazilian) [en_us]English [es_es]Spanish')
    Logger.info('The default language will be used instead of en_us');
    const { consequence, context, decision, title } = await import('./lang/en_us.json');
    return {
        consequence,
        context,
        decision,
        title
    }
}