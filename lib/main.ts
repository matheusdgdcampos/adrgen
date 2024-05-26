import { Command } from 'commander';
import process from 'node:process';

import { createFile } from './create-file';
import { makeQuestion } from './readline-interface';
import { setConsequence } from './set-consequences';
import { setContext } from './set-context';
import { setDate } from './set-date';
import { setDecision } from './set-decision';
import { setTitle } from './set-title';
import { LanguageResult, setAppLanguage } from './set-app-language';
import { readTemplateContent } from './read-template-content';


export async function bootstrap() {
    const program = new Command('adrgen');
    program
        .description('Generator of archtecture decision record archive')
        .version((await import('../package.json')).version, '-v, --version');


    program
        .command('init')
        .description('Generate file model of recorder')
        .argument('[--lang]', 'Set language running CLI [pt_br]Portuguese(Brazilian) [en_us]English [es_es]Spanish')
        .action(async (arg) => {
            let text_content: string = await readTemplateContent();
            let selectedLang: string;

            if (arg === undefined) {
                selectedLang = await makeQuestion('Select language [pt_br]Portuguese(Brazilian) [en_us]English [es_es]Spanish [enter]skip, Default[en_us]: ');
                const lang = await setAppLanguage(selectedLang) as LanguageResult;
                const title = await makeQuestion(lang.title);
                const context = await makeQuestion(lang.context);
                const decision = await makeQuestion(lang.decision);
                const consequence = await makeQuestion(lang.consequence);
                text_content = setDate(text_content);
                text_content = setTitle(title, text_content);
                text_content = setContext(context, text_content);
                text_content = setDecision(decision, text_content);
                text_content = setConsequence(consequence, text_content) as string;
                await createFile(title, text_content);
                process.exitCode = 0;
                return;
            }

            const lang = await setAppLanguage(arg) as LanguageResult;
            const title = await makeQuestion(lang.title);
            const context = await makeQuestion(lang.context);
            const decision = await makeQuestion(lang.decision);
            const consequence = await makeQuestion(lang.consequence);
            text_content = setDate(text_content);
            text_content = setTitle(title, text_content);
            text_content = setContext(context, text_content);
            text_content = setDecision(decision, text_content);
            text_content = setConsequence(consequence, text_content) as string;
            await createFile(title, text_content);
            process.exitCode = 0;
            return;
        });

    program.parse();
}
