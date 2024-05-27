import { Logger } from "../logger/logger";
import { makeQuestion } from "../readline-interface";

export async function fillTitle(titleSentence: string) {
    let titleAnswer: string;
    titleAnswer = await makeQuestion(titleSentence);

    if (titleAnswer.length === 0) {
        Logger.error('Title must have at least 1 character')
        return fillTitle(titleSentence);
    }

    return titleAnswer;
}