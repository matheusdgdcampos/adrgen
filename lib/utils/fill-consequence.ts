import { Logger } from "../logger/logger";
import { makeQuestion } from "../readline-interface";

export async function fillConsequence(consequenceSentence: string) {
    let consequenceAnswer: string;
    consequenceAnswer = await makeQuestion(consequenceSentence);

    if (consequenceAnswer.length === 0) {
        Logger.error('Consequence must have at least 1 character');
        return fillConsequence(consequenceSentence);
    }

    return consequenceAnswer;
}