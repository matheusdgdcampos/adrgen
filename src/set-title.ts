export function set_title(title: string, text_content: string) {
  return text_content.replace(/\[title\]/, title);
}