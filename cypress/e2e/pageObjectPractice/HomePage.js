/// <reference types="Cypress" />

const INPUT_BOX="input[name='name']:nth-child(2)";
const EMAIL_BOX="input[name='email']";
const PASSWORD_BOX="#exampleInputPassword1";
const GENDER_SELCT="#exampleFormControlSelect1";

class HomePage{

    static fillInputBox(fillName){
        cy.get(INPUT_BOX).clear().type(fillName);
        cy.get(INPUT_BOX).should('have.value',fillName);
    }

    static fillEmail(email){
        cy.get(EMAIL_BOX).clear().type(email);
    }

    static fillPassword(password){
        cy.get(PASSWORD_BOX).clear().type(password);
    }

    static selectGender(gender){
        cy.get(GENDER_SELCT).select(gender);
    }

}

export default HomePage;