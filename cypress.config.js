const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://dev.delekhomes.com',
    experimentalStudio:true,
    viewportHeight: 1200,
    viewportWidth: 1400
  },
})
