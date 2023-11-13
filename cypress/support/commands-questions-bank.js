const { faker } = require('@faker-js/faker');

Cypress.Commands.add('questionsBankTestCheck', () => {
    cy.get('input[type="file"]')
    // cy.get('[id=search-candidate-form]')
    cy.wait(1000)
})

Cypress.Commands.add('questionsBankTestEmpty', () => {
    cy.get('input[type="file"]').scrollIntoView({duration: 600}).focus()
    // cy.get('[id=search-candidate-form]')
    // cy.get('button[type="submit"]').click()
    cy.wait(1000)
})

Cypress.Commands.add('questionsBankTestFileType', () => {
    cy.get('input[type="file"]').scrollIntoView({duration: 600}).focus()
    cy.upload_file('test33.json', 'application/json', 'input[type="file"]'); // image/png
    cy.wait(3000) 
    // cy.contains('test33.json');
    // cy.get('[id=search-candidate-form]')
    // cy.get('button[type="submit"]').click()
    cy.wait(1000) 
})

Cypress.Commands.add('questionsBankTestOK', () => {
    cy.get('input[type="file"]').scrollIntoView({duration: 600}).focus()
    cy.upload_file('test36.json', 'application/json', 'input[type="file"]');
    cy.wait(3000) 
    // cy.contains('test36.json');
    // cy.get('[id=search-candidate-form]')
    // cy.get('button[type="submit"]').click()
    cy.wait(1000) 
})

Cypress.Commands.add('loginOK', () => {
    cy.get('[id=username]').scrollIntoView().focus().type("jhonDoe1231")
    cy.get('[id=password]').scrollIntoView().focus().type("pass1234")
    cy.get('button[type="submit"]').click()
    cy.wait(2000)
})
