import { When, Then , Given} from "@badeball/cypress-cucumber-preprocessor";

import HomePage from "../../pageObjectPractice/HomePage"

Given('i navigate to home page',()=>{
    cy.visit(Cypress.env('PRACTICE_URL'));
})

Given (/^Fill the "([^"]*)" field$/, (username) => {
    HomePage.fillInputBox(username);
});

Then (/^Fill the new "([^"]*)" field$/, (email) => {
    HomePage.fillEmail(email);
});

When (/^Fill the password "([^"]*)" field$/, (password) => {
    HomePage.fillPassword(password);
});

When (/^Fill the gender "([^"]*)" field$/, (gender) => {
    HomePage.selectGender(gender);
});

