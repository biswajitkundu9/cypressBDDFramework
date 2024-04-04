const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 9000,
  env:{
    PRACTICE_URL:"https://rahulshettyacademy.com/angularpractice/",
  },
  //port:8089,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});
