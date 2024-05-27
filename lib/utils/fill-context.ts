import { Logger } from "../logger/logger";
import { makeQuestion } from "../readline-interface";

export async function fillContext(contextSentence: string) {
    let contextAnswer: string;
    contextAnswer = await makeQuestion(contextSentence);

    if (contextAnswer.length === 0) {
        Logger.error('Context must have at least 1 character');
        return fillContext(contextSentence);
    }

    return contextAnswer;
}