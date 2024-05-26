import process from 'node:process';

import { Message } from "./errors/message";

export function setConsequence(consequence: string, text_content: string) {
    if (consequence.length === 0) {
        Message.error('Consequence param must be more than 1 character');
        process.exitCode = 1;
        return;
    }

    return text_content.replace(/\[consequence\]/, consequence);
}