import { Command } from 'commander';

import { createFile } from './create-file';
import { makeQuestion } from './readline-interface';
import { setConsequence } from './set-consequences';
import { setContext } from './set-context';
import { setDate } from './set-date';
import { setDecision } from './set-decision';
import { setTitle } from './set-title';


export function bootstrap() {
  const program = new Command();
  program
    .name('adrgen')
    .description('Generator of archtecture decision record archive')
    .version('1.0.0')

  program
    .command('init')
    .description('Generate file model of recorder')
    .action(async () => {
      let text_content: string;
      const title = String(await makeQuestion('how is title of file? '));
      const context = String(await makeQuestion('type a context: '));
      const decision = String(await makeQuestion('type a decision: '));
      const consequence = String(await makeQuestion('type a consequence: '));
      text_content = await setDate();
      text_content = setTitle(title, text_content);
      text_content = setContext(context, text_content);
      text_content = setDecision(decision, text_content);
      text_content = setConsequence(consequence, text_content);
      await createFile(title, text_content);
      process.exit(0);
    })

  program.parse()
}
