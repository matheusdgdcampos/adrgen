import readline from 'readline';
import { promisify } from 'util';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

export const makeQuestion = promisify(rl.question).bind(rl);
