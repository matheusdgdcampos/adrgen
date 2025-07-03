import { Logger } from "./logger/logger";
import { makeQuestion } from "./readline-interface";

export async function getAppLang() {
    const lang = await makeQuestion('Select language [pt_br]Portuguese(Brazilian) [en_us]English [es_es]Spanish [enter]skip, Default[en_us]: ');
    

    if (lang !== 'pt_br' && lang !== 'en_us' && lang !== 'es_es' && lang !== '') {
        Logger.error('Invalid language, please select a valid language');
        return getAppLang();
    }

  return lang;
}