import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [],
  test: {
    watch: false,
    reporters: 'verbose',
    environment: 'jsdom',
    globals: true,
    // setupFiles: ['./vitest.setup.ts'],
    coverage: {
      include: ['index.ts'],
      reporter: ['html', 'lcov'],
      reportsDirectory: './coverage'
    }
  }
})
