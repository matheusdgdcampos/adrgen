import process from 'node:process';

import { Message } from "./errors/message";

export function setContext(context: string, text_content: string) {
    if (context.length === 0) {
        Message.error('Context param must be more than 1 character');
        process.exitCode = 1;
        return;
    }

    return text_content.replace(/\[context\]/, context);
}