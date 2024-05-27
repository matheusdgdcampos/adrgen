import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        testTimeout: 15000,
        coverage: {
            reporter: ['text', 'html', 'json', 'lcov'],
            include: ['**/*.ts'],
            exclude: ['main.ts', 'readline-interface.ts', 'index.ts', 'fill-consequence.ts', 'fill-context.ts', 'fill-decision.ts', 'fill-title.ts']
        }
    }
})