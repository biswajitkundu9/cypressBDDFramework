/// <reference types="Cypress" />

const PRODUCTS_PRICE="table[class='table table-hover'] td:nth-child(4) strong";
const EXPECTED_TOTAL_PRICE="h3 strong";
const PRODUCT_PRICES="tr td:nth-child(4) strong";

class ProductPage{

    static sum=0;

    static validateTotalProductPrice(){
        cy.get(PRODUCTS_PRICE).each(($el, index, $list) => {


            const amount = $el.text()
            let res = amount.split(" ");
            res = res[1].trim();
            ProductPage.sum = Number(ProductPage.sum) + Number(res)

      
          }).then(function () {
            cy.log(`Total actual sum amount after adding product : ${ProductPage.sum}`)
          });

          cy.get(EXPECTED_TOTAL_PRICE).then(function (element) {
            const amount = element.text()
            var res = amount.split(" ")
            var total = res[1].trim()
            expect(Number(total)).to.equal(ProductPage.sum)
      
          })
    }
}

export default ProductPage;