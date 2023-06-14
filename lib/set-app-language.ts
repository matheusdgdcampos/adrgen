import chalk from 'chalk';

export type LanguageResult = {
  title: string;
  context: string;
  decision: string;
  consequence: string;
}

export async function setAppLanguage(prompt: string): Promise<LanguageResult | void> {
  if (prompt === 'es-es') {
    const { consequence, context, decision, title } = await import('./lang/es-es.json');
    return {
      consequence,
      context,
      decision,
      title
    }
  }

  if (prompt === 'pt-br') {
    const { consequence, context, decision, title } = await import('./lang/pt-br.json');
    return {
      consequence,
      context,
      decision,
      title
    }
  }

  if (prompt === 'en-us') {
    const { consequence, context, decision, title } = await import('./lang/en-us.json');
    return {
      consequence,
      context,
      decision,
      title
    }
  }

  if (prompt.length === 0) {
    const { consequence, context, decision, title } = await import('./lang/en-us.json');
    return {
      consequence,
      context,
      decision,
      title
    }
  }

  if (prompt !== 'pt-br' || 'en-us' || 'es-es') {
    console.info(chalk.red('[ERROR] Language selected must be [pt-br]Portuguese(Brazilian) [en-us]English [es-es]Spanish'))
    return process.exit(1);
  }
}