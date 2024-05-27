import { Command } from '@commander-js/extra-typings';

import { createFile } from './create-file';
import { makeQuestion } from './readline-interface';
import { setConsequence } from './set-consequences';
import { setContext } from './set-context';
import { setDate } from './set-date';
import { setDecision } from './set-decision';
import { setTitle } from './set-title';
import { setAppLanguage } from './set-app-language';
import { readTemplateContent } from './read-template-content';
import { fillTitle } from './utils/fill-title';
import { fillContext } from './utils/fill-context';
import { fillDecision } from './utils/fill-decision';
import { fillConsequence } from './utils/fill-consequence';
import { getAppLang } from './get-app-lang';
import { Logger } from './logger/logger';

export async function bootstrap() {
    const program = new Command('adrgen');
    program
        .description('Generator of archtecture decision record archive')
        .version((await import('../package.json')).version, '-v, --version');


    program
        .command('init')
        .description('Generate file model of recorder')
        .argument('[string]', 'Set language running CLI [pt_br]Portuguese(Brazilian) [en_us]English [es_es]Spanish')
        .option('-l, --lang', 'Set language running CLI [pt_br]Portuguese(Brazilian) [en_us]English [es_es]Spanish', 'en_us')
        .action(async (arg) => {
            let text_content: string = await readTemplateContent();

            if (arg === undefined) {
                const selectedLang = await getAppLang();
                const lang = await setAppLanguage(selectedLang);
                const title = await fillTitle(lang.title);
                const context = await fillContext(lang.context);
                const decision = await fillDecision(lang.decision);
                const consequence = await fillConsequence(lang.consequence);
                Logger.log('Generate date of record.');
                text_content = setDate(text_content);
                Logger.log('Date generated register with success!');
                Logger.log('Entering parameters you answered.');
                text_content = setTitle(title, text_content);
                text_content = setContext(context, text_content);
                text_content = setDecision(decision, text_content);
                text_content = setConsequence(consequence, text_content);
                Logger.log('Parameters entered successfully.');
                Logger.log('Generating architecture decision record file...');
                await createFile(title, text_content);
                Logger.log('Architecture decision record file generated with success!');
                Logger.log('Finishing process.');
                process.exit(0)
            }

            const lang = await setAppLanguage(arg);
            const title = await fillTitle(lang.title);
            const context = await fillContext(lang.context);
            const decision = await fillDecision(lang.decision);
            const consequence = await fillConsequence(lang.consequence);
            Logger.log('Generate date of record.');
            text_content = setDate(text_content);
            Logger.log('Date generated register with success!');
            Logger.log('Entering parameters you answered.');
            text_content = setTitle(title, text_content);
            text_content = setContext(context, text_content);
            text_content = setDecision(decision, text_content);
            text_content = setConsequence(consequence, text_content);
            Logger.log('Parameters entered successfully.');
            Logger.log('Generating architecture decision record file...');
            await createFile(title, text_content);
            Logger.log('Architecture decision record file generated with success!');
            Logger.log('Finishing process.');
            return process.exit(0);
        });

    program.parse();
}
