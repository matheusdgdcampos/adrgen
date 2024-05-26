import { generateDate } from './utils/generate-date';

export function setDate(text_content: string) {
    return text_content.replace(/\[date\]/g, generateDate());
}

