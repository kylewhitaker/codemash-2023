import { defineConfig } from 'cypress';

export default defineConfig({
  video: false,
  viewportHeight: 850,
  viewportWidth: 1300,
  retries: 0,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    baseUrl: 'http://localhost:3000',
  },
});
