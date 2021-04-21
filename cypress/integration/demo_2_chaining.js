/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://webshop.mobiletestautomation.nl')
    })
  
    it('Example with asynchronous code without proper chaining', () => {
        cy.log('Look at the console log (developer tools)')

        console.log('Example with asynchronous code without proper chaining')
        console.log('Hello')

        cy.task('doSomethingSlow','world').then(text => console.log(text))
        
        console.log('!')
    })

    it('Example with asynchronous code with proper chaining', () => {
        cy.log('Look at the console log (developer tools)')

        console.log('Example with asynchronous code with proper chaining')
        console.log('Hello')

        cy.task('doSomethingSlow','world').then(text => {
            console.log(text)
            console.log('!')
        })
    })
})