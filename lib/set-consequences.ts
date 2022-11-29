export function set_consequence(consequence: string, text_content: string) {
  return text_content.replace(/\[consequence\]/, consequence);
}