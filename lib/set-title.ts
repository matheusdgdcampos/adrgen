import { Message } from "./errors/message";

export function setTitle(title: string, text_content: string) {
  if (title.length === 0) {
    Message.error('Title param must be more than 1 character');
    Message.info('Title param must be more than 1 character');
    return process.exit(1);
  }

  return text_content.replace(/\[title\]/, title);
}