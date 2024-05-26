import readline from 'readline';
import { promisify } from 'util';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

type Question = (arg: string) => Promise<string>

export const makeQuestion = promisify(rl.question).bind(rl) as unknown as Question;
