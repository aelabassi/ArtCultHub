// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // Global test setup
    setupFiles: ['./tests/config/setup.ts'],
    
    // Environment configuration
    environment: 'node', // or 'node' based on your needs
    
    // Coverage settings
    coverage: {
      provider: 'v8', // or 'c8'
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'tests/**',
      ],
    },
    
    // Test file patterns
    include: ['tests/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    exclude: ['node_modules', 'dist'],
    
    // Aliases (if you use them in your project)
    alias: {
      '@': '/src',
      '@tests': '/tests'
    },
    
    // Global test settings
    globals: true,
    
    // Watch mode settings
    watch: false
  },
})