import { makeQuestion } from "./readline-interface";

export async function getAppLang() {
    const lang = await makeQuestion('Select language [pt_br]Portuguese(Brazilian) [en_us]English [es_es]Spanish [enter]skip, Default[en_us]: ');

    if (lang.length === 0) {
        return getAppLang();
    }

    if (lang !== 'pt_br' || 'en_us' || 'es_es') {
        console.log('is diferent')
        return getAppLang();
    }

    return lang;
}