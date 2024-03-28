
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
        //cy.visit("https://rahulshettyacademy.com/angularpractice/");
        cy.get("input[name='name']:nth-child(2)").clear().type(this.data.name);
        cy.get("input[name='name']:nth-child(2)").should('have.value',"abcde");
        cy.get("input[name='email']").clear().type("abc@abc.com");
        cy.get("#exampleInputPassword1").clear().type("password");
        cy.get("#exampleFormControlSelect1").select('Female');
    })

    it("Automate the Shop page",function(){
        cy.contains("Shop").click();
        cy.wait(2000);
        
        /*cy.get("h4.card-title").each(($el,index,$list)=>{
            cy.log($el.text());
            if($el.text().includes(productName)){
                cy.get("button.btn.btn-info").eq(index).click()
            }
        });
        cy.selectProduct("iphone");
        cy.selectProduct("Blackberry");*/
        this.data.productsName.forEach(function(product){
            cy.selectProduct(product);
        })
        cy.contains("Checkout").click();
    })

})