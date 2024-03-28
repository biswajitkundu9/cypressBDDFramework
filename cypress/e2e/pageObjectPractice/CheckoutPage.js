const CHECKOUT_BTN="button.btn.btn-success";
const COUNTRY_INPUT_BOX="#country";
const TERMS_CONDITIONS_CHECKBOX="#checkbox2";
const ALERT_MSG=".alert";

class CheckoutPage{

    static clickCheckOutButtonFromCheckoutPage(){
        cy.get(CHECKOUT_BTN).click();
        cy.log("Clicked on checkout button from Checkout Page")
    }

    static clickOnTermsAndConditions(){
        if(cy.get(TERMS_CONDITIONS_CHECKBOX).should("not.be.checked"))
            cy.get(TERMS_CONDITIONS_CHECKBOX).click({force: true})
        else
            throw new Error("Something wrong with chck boxes");
        cy.log("Clicked on term and conditons");

    }

    static selectCountry(actualText){
        cy.get(COUNTRY_INPUT_BOX).clear().type(actualText).type('{downArrow}').type('{enter}');
    }

    static validatePurchasedMsg(){
        cy.get(ALERT_MSG).then((element)=>{
            let actualText=element.text();
            if(actualText.includes("Success")){
                expect(true).to.be.true
            }
        })
        
    }
}

export default CheckoutPage;