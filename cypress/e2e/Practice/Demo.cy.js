/// <reference types="Cypress" />

import HomePage from "../pageObjectPractice/HomePage"
import CheckoutPage from "../pageObjectPractice/CheckoutPage"

describe('Practice Step',function(){



    beforeEach(function(){
        cy.fixture("example").then((data)=>{
            this.data=data;
        });
       
    })

    beforeEach(function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
    })

    it('Fill up the form',function(){

        HomePage.fillInputBox(this.data.name);
        HomePage.fillEmail(this.data.email);
        HomePage.fillPassword(this.data.password);
        HomePage.selectGender(this.data.gender);
    });

    it("Automate the Checkout page",function(){
        //cy.contains("Shop").click();
        cy.clickedByUsingContains("Shop");
        //cy.wait(2000);
        this.data.productsName.forEach(function(product){
            cy.selectProduct(product);
        })
        cy.clickedByUsingContains("Checkout");
       // cy.wait(2000);
        CheckoutPage.clickCheckOutButtonFromCheckoutPage();
        CheckoutPage.selectCountry("India");
        CheckoutPage.clickOnTermsAndConditions();
        cy.clickedByUsingContains("Purchase");
        CheckoutPage.validatePurchasedMsg();
    });

})