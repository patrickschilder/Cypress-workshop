/// <reference types="cypress" />

describe("How Cypress works", () => {
    it("Runs the click command only at the end", () => {
        cy.visit('https://webshop.mobiletestautomation.nl')
        cy.get('[name="s"]').type('Cypress')
        alert("Hey! you must click OK in order to continue.")
    })
})