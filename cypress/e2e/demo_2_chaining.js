/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://webshop.mobiletestautomation.nl')
    })
  
    it('Example with asynchronous code without proper chaining', () => {
        cy.log('Look at the console log (developer tools)')

        console.log('Example with asynchronous code without proper chaining')
        console.log('1: Hello')

        cy.task('doSomethingSlow','world').then(text => console.log(text))
        
        console.log('!') // This will be executed before the task is finished
    })

    it('Example with asynchronous code with proper chaining', () => {
        cy.log('Look at the console log (developer tools)')

        console.log('Example with asynchronous code with proper chaining')
        console.log('2: Hello')

        cy.task('doSomethingSlow','world').then(text => {
            console.log(text)
            console.log('!') // This will be executed after the task is finished
        })
    })

    it('Example with asynchronous code without resolving a promise', () => {
        cy.log('Look at the console log (developer tools) and the command log')

        console.log('Example with asynchronous code without resolving a promise')
        console.log('3: Hello')
        cy.task('doSomethingBackground',{text1: 'world', text2: 'isn\'t it beautiful'}) // This will be executed even after test is finished
        console.log('!')
    })
})