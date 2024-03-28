/// <reference types="Cypress" />

import HomePage from "../pageObjectPractice/HomePage"

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
    })

    it("Automate the Shop page",function(){
        cy.contains("Shop").click();
        cy.wait(2000);
        this.data.productsName.forEach(function(product){
            cy.selectProduct(product);
        })
        cy.contains("Checkout").click();
    })

})