import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html', 'json'],
      all: true,
      include: ['**/*.ts'],
      exclude: ['./lib/main.ts']
    }
  }
})