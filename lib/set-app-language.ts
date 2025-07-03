import { Logger } from './logger/logger';

export async function setAppLanguage(prompt: string) {
  const langs = {
    'es_es': (await import('./lang/es_es.json')).default,
    'pt_br': (await import('./lang/pt_br.json')).default,
    'en_us': (await import('./lang/en_us.json')).default,
  }

    if (langs[prompt as keyof typeof langs]) {
        const { consequence, context, decision, title } = langs[prompt as keyof typeof langs];
        return {
            consequence,
            context,
            decision,
            title
        }
    }

    Logger.info('The default language en_us is set up');
    const { consequence, context, decision, title } = langs['en_us'];
    return {
        consequence,
        context,
        decision,
        title
    }
}