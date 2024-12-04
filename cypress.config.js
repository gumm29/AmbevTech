const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {},
  env: {
    frontUrl: 'https://front.serverest.dev',
    backUrl: 'https://serverest.dev',
  },
});
