import { Logger } from "../logger/logger";
import { makeQuestion } from "../readline-interface";

export async function fillDecision(decisionSentence: string) {
    let decisionAnswer: string;
    decisionAnswer = await makeQuestion(decisionSentence);

    if (decisionAnswer.length === 0) {
        Logger.error('Decision must have at least 1 character');
        return fillDecision(decisionSentence);
    }

    return decisionAnswer;
}