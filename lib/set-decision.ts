import process from 'node:process';

import { Message } from "./errors/message";

export function setDecision(decision: string, text_content: string) {
    if (decision.length === 0) {
        Message.error('Decision param must be more than 1 character');
        process.exitCode = 1;
        return;
    }

    return text_content.replace(/\[decision\]/, decision);
}