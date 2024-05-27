import chalk from 'chalk';

export class Logger {
    static log(input: string, ...optionalParams: any[]) {
        console.log(chalk.green(`[LOG] ${input}`), ...optionalParams);
    }

    static info(input: string, ...optionalParams: any[]) {
        console.log(chalk.cyan(`[INFO] ${input}`), ...optionalParams);
    }

    static error(input: string, ...optionalParams: any[]) {
        console.error(chalk.red(`[ERROR] ${input}`), ...optionalParams);
    }
}