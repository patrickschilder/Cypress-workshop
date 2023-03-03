const { defineConfig } = require("cypress")

module.exports = defineConfig({
  viewportWidth: 1400,
  viewportHeight: 1050,
  chromeWebSecurity: false,
  defaultCommandTimeout: 4000,
  pageLoadTimeout: 30000,
  watchForFileChanges: true,
  taskTimeout: 90000,
  numTestsKeptInMemory: 30,
  blockHosts: ['*googleapis.com', '*microsoft.com', '*cloudflare.com'],

  e2e: {
    baseUrl: 'https://webshop.mobiletestautomation.nl',
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: ['cypress/e2e/**/*.{feature,features}','cypress/e2e/*.js'],
  },
})
