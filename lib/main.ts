import { Command } from 'commander';

import { create_file } from './create-file';
import { makeQuestion } from './readline-interface';
import { set_consequence } from './set-consequences';
import { set_context } from './set-context';
import { set_date } from './set-date';
import { set_decision } from './set-decision';
import { set_title } from './set-title';


export function bootstrap() {
  const program = new Command();
  program
    .name('adrgen')
    .description('Generator of archtecture decision record archive')
    .version('0.1.1')

  program
    .command('init')
    .description('Generate file model of recorder')
    .action(async () => {
      let text_content: string;
      const title = String(await makeQuestion('how is title of file? '));
      const context = String(await makeQuestion('type a context: '));
      const decision = String(await makeQuestion('type a decision: '));
      const consequence = String(await makeQuestion('type a consequence: '));
      text_content = await set_date();
      text_content = set_title(title, text_content);
      text_content = set_context(context, text_content);
      text_content = set_decision(decision, text_content);
      text_content = set_consequence(consequence, text_content);
      await create_file(title, text_content);
      process.exit(0);
    })

  program.parse()
}
