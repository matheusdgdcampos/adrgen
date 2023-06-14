import { Command } from 'commander';

import { createFile } from './create-file';
import { makeQuestion } from './readline-interface';
import { setConsequence } from './set-consequences';
import { setContext } from './set-context';
import { setDate } from './set-date';
import { setDecision } from './set-decision';
import { setTitle } from './set-title';
import { LanguageResult, setAppLanguage } from './set-app-language';


export function bootstrap() {
  const program = new Command('adrgen');
  program
    .description('Generator of archtecture decision record archive')
    .version(require('../package.json').version, '-v, --version')


  program
    .command('init')
    .description('Generate file model of recorder')
    .argument('[--lang]', 'Set language running CLI [pt-br]Portuguese(Brazilian) [en-us]English [es-es]Spanish')
    .action(async (arg) => {
      let text_content: string;
      let selectedLang: string;

      if (arg === undefined) {
        selectedLang = String(await makeQuestion('Select language [pt-br]Portuguese(Brazilian) [en-us]English [es-es]Spanish [enter]skip, Default[en-us]: '));
        const lang = await setAppLanguage(selectedLang) as LanguageResult;
        const title = String(await makeQuestion(lang.title));
        const context = String(await makeQuestion(lang.context));
        const decision = String(await makeQuestion(lang.decision));
        const consequence = String(await makeQuestion(lang.consequence));
        text_content = await setDate();
        text_content = setTitle(title, text_content);
        text_content = setContext(context, text_content);
        text_content = setDecision(decision, text_content);
        text_content = setConsequence(consequence, text_content);
        await createFile(title, text_content);
        return process.exit(0);
      }

      const lang = await setAppLanguage(arg) as LanguageResult;
      const title = String(await makeQuestion(lang.title));
      const context = String(await makeQuestion(lang.context));
      const decision = String(await makeQuestion(lang.decision));
      const consequence = String(await makeQuestion(lang.consequence));
      text_content = await setDate();
      text_content = setTitle(title, text_content);
      text_content = setContext(context, text_content);
      text_content = setDecision(decision, text_content);
      text_content = setConsequence(consequence, text_content);
      await createFile(title, text_content);
      return process.exit(0);
    })

  program.parse()
}
