import chalk from 'chalk';

export class Message {
    static log(input: string, ...optionalParams: any[]) {
        console.log(input, ...optionalParams);
    }

    static info(input: string, ...optionalParams: any[]) {
        console.log(`${chalk.cyan('[INFO]')} ${input}`, ...optionalParams);
    }

    static error(input: string, ...optionalParams: any[]) {
        console.error(`${chalk.red('[ERROR]')} ${chalk.red(input)}`, ...optionalParams);
    }
}