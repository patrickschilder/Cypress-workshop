/// <reference types="cypress" />

describe("Execution order", () => {
    it("Runs the click command only at the end", () => {
        cy.visit('https://webshop.mobiletestautomation.nl')
        cy.get('[name="s"]').type('Cypress')
        alert("Hey! you must click OK in order to continue.")
    })
})