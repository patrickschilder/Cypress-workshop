/// <reference types="cypress" />

describe("Advanced commands - adding a product to shopping cart", () => {
    it("Advanced commands - adding a product to shopping cart", () => {
        cy.visit('https://webshop.mobiletestautomation.nl')

        cy.get('a:contains("Hummingbird printed sweater")').click()
        
        // Use intercept to monitor communication which is happening in the background like Ajax call
        cy.intercept({
            method: 'POST',
            url: 'module/ps_shoppingcart/ajax'
        }).as('requestCheck')

        cy.get('button:contains("Add to cart")').click()
        
        cy.wait('@requestCheck').then((interception) => {
            expect(interception.response.statusCode).to.equal(200)

            cy.get('button:contains("Continue shopping")').should('be.visible').click()
            cy.get('span:contains("Home")').eq(0).click()

            cy.get('span:contains("Cart")').click()
            cy.get('h1:contains("Shopping Cart")').should('be.visible')

            cy.get('[class="cart-item"]').should('have.length', 1)
            cy.get('span:contains("Total")').next().should('have.text', '€34.75')
            cy.get('span:contains("Total")').siblings(1).should('have.text', '€34.75') // Siblings for example also works with multiple colums
        })

    })

    it("Advanced commands - using the viewport", () => {
        cy.visit('https://webshop.mobiletestautomation.nl')
        cy.viewport('iphone-8')

    })
})