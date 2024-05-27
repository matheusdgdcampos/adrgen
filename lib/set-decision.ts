export function setDecision(decision: string, text_content: string) {
    return text_content.replace(/\[decision\]/, decision);
}