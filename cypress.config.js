const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

module.exports = defineConfig({
  defaultCommandTimeout: 9000,
  env:{
    PRACTICE_URL:"https://rahulshettyacademy.com/angularpractice/",
  },
  //port:8089,
  e2e: {
    setupNodeEvents,
    //specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    specPattern: 'cypress/e2e/BDD/*.feature',
  },
});
