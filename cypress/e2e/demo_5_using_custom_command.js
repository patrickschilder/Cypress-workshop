/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://webshop.mobiletestautomation.nl')
    })
  
    it('Filling in contact form using standard type', () => {
        cy.get('#contact-link').click()

        let message = `Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        cy.wait(5000)
        cy.get('[name="message"]').type(message)
    })

    it('Filling in contact form using custom command', () => {
        cy.get('#contact-link').click()

        let message = `Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        cy.wait(5000)
        cy.get('[name="message"]').fill(message)
    })

})