module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false, // Disable Chrome's web security for testing
    video: true, // Enable video recording of tests
    defaultCommandTimeout: 10000, // Set the default timeout for commands
  },
};


const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.imdb.com',
  },
});
