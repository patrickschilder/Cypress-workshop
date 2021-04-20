/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://webshop.mobiletestautomation.nl')
    })
  
    it('Example with asynchronous code without proper chaining', () => {
        console.log('Example with asynchronous code without proper chaining')
        console.log('Hello')

        cy.task('doSomethingSlow','world').then(text => console.log(text))
        
        console.log('!')
        
        cy.log('Look at the console log (developer tools)')
    })

    it('Example with asynchronous code with proper chaining', () => {
        console.log('Example with asynchronous code with proper chaining')
        console.log('Hello')

        cy.task('doSomethingSlow','world').then(text => {
            console.log(text)
            console.log('!')
        })
        
        cy.log('Look at the console log (developer tools)')
    })

    it('Mixing sync and async - not working', () => {
        cy.log('Mixing sync and async - not working')
        const menu = cy.get('[class="dropdown-item"]')
        cy.log(menu.text());
    });

    it('Mixing sync and async - working', () => {
        cy.log('Mixing sync and async - working')
        cy.get('[class="dropdown-item"]').then(menu => cy.log(menu.text()));
      });
})