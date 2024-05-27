export function setConsequence(consequence: string, text_content: string) {
    return text_content.replace(/\[consequence\]/, consequence);
}