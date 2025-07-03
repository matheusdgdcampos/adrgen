import { Logger } from './logger/logger';

export async function setAppLanguage(prompt: string) {
    if (prompt === 'es_es') {
        const { consequence, context, decision, title } = (await import('./lang/es_es.json')).default;
        return {
            consequence,
            context,
            decision,
            title
        }
    }

    if (prompt === 'pt_br') {
        const { consequence, context, decision, title } = (await import('./lang/pt_br.json')).default;
        return {
            consequence,
            context,
            decision,
            title
        }
    }

    if (prompt === 'en_us') {
        const { consequence, context, decision, title } = (await import('./lang/en_us.json')).default;
        return {
            consequence,
            context,
            decision,
            title
        }
    }

    Logger.info('The default language en_us is set up');
    const { consequence, context, decision, title } = (await import('./lang/en_us.json')).default;
    return {
        consequence,
        context,
        decision,
        title
    }
}