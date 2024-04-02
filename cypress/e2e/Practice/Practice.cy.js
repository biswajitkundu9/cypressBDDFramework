/// <reference types="Cypress" />

import HomePage from "../pageObjectPractice/HomePage"
import CheckoutPage from "../pageObjectPractice/CheckoutPage"
import ProductPage from "../pageObjectPractice/ProductPage";

describe('Practice Step',function(){



    beforeEach(function(){
        cy.fixture("example").then((data)=>{
            this.data=data;
        });
       
    })

    beforeEach(function(){
        //cy.visit("https://rahulshettyacademy.com/angularpractice/");
        cy.visit(Cypress.env('PRACTICE_URL'));
    })

    it('Fill up the form',function(){

        HomePage.fillInputBox(this.data.name);
        HomePage.fillEmail(this.data.email);
        HomePage.fillPassword(this.data.password);
        HomePage.selectGender(this.data.gender);
    });

    it("Automate the Checkout page",function(){
        cy.clickedByUsingContains("Shop");
        this.data.productsName.forEach(function(product){
            cy.selectProduct(product);
        })
        cy.clickedByUsingContains("Checkout");
        ProductPage.validateTotalProductPrice();
        CheckoutPage.clickCheckOutButtonFromCheckoutPage();
        CheckoutPage.selectCountry("India");
        CheckoutPage.clickOnTermsAndConditions();
        cy.clickedByUsingContains("Purchase");
        CheckoutPage.validatePurchasedMsg();
    });

})