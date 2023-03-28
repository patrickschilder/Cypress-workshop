/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://webshop.mobiletestautomation.nl')
    })
  
    it('Chaining and variables - not working', () => {
        cy.log('Mixing sync and async - not working')
        const menu = cy.get('[class="dropdown-item"]').eq(0)
        cy.log(menu.text())
    })

    it('Chaining and variables - working', () => {
        cy.log('Mixing sync and async - working')
        cy.get('[class="dropdown-item"]').eq(0).then(menu => {
          cy.log(menu.text())
          expect(menu.text()).to.contain('Fruit')
        }
      )
    })
})