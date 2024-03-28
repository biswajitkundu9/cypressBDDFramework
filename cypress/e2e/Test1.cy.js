describe('End to end automation',function(){
    it('Automate login page',function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.url().should('include', 'auth/login')
    })
})