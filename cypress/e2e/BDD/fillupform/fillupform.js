import { When, Then , Given, And} from "@badeball/cypress-cucumber-preprocessor";

import HomePage from "../../pageObjectPractice/HomePage"

Given(' i navigate to home page',()=>{
    cy.visit(Cypress.env('PRACTICE_URL'));
})

When('Fill the username field',()=>{
    HomePage.fillInputBox(this.data.name);
})

Then('Fill the username field',()=>{
    HomePage.fillEmail(this.data.email);
})

And('Fill the password field',()=>{
    HomePage.fillPassword(this.data.password);
})

Then('Select the gender',()=>{
    HomePage.selectGender(this.data.gender);
})

