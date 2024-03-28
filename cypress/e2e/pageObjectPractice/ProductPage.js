/// <reference types="Cypress" />

const INPUT_BOX="input[name='name']:nth-child(2)";
const EMAIL_BOX="input[name='email']";
const PASSWORD_BOX="#exampleInputPassword1";
const GENDER_SELCT="#exampleFormControlSelect1";

class ProductPage{

    static fillInputBox(fillName){
        cy.get(INPUT_BOX).clear().type(fillName);
        cy.get(INPUT_BOX).should('have.value',fillName);
    }



}

export default ProductPage;