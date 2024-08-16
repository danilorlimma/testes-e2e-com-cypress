const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://notes-serverless-app.com',
    experimentalRunAllSpecs:true,
    defaultCommandTimeout:9000,
    requestTimeout:9000,
    responseTimeout:40000,
    projectId:'bketdn',
    chromeWebSecurity: false,
    env:{viewportWidthBreakpoint:768,}
  },
})
