export function setContext(context: string, text_content: string) {
  return text_content.replace(/\[context\]/, context);
}