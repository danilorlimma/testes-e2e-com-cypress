const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://notes-serverless-app.com',
    experimentalRunAllSpecs:true,
    defaultCommandTimeout:9000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
