import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        testTimeout: 15000,
        coverage: {
            provider: 'istanbul',
            reporter: ['text', 'html', 'json', 'lcov', 'clover'],
            include: ['**/*.ts'],
            exclude: ['./lib/main.ts', './lib/readline-interface.ts', './index.ts']
        }
    }
})