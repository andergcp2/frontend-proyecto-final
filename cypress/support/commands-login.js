const { faker } = require('@faker-js/faker');

Cypress.Commands.add('checkLoginTest', () => {
    cy.get('[id=username]')
    cy.get('[id=password]')
    cy.get('[id=login-form]')
    cy.wait(1000)
})

Cypress.Commands.add('loginTestEmpty', () => {
    cy.get('[id=username]').scrollIntoView().focus()
    cy.get('[id=password]').type("xxx")
    // cy.get('[id=password]').scrollIntoView().focus()
    cy.get('button[type="submit"]').click()
    // cy.contains('requerida').should('be.visible') 
    cy.wait(1000)
})

Cypress.Commands.add('loginUsrTestError', () => {
    cy.get('[id=username]').type(faker.person.firstName())
    cy.get('[id=password]').type(faker.internet.password())
    cy.wait(1000)
    cy.get('button[type="submit"]').click()
    cy.wait(1000)
})

Cypress.Commands.add('loginPwdTestError', () => {
    cy.get('[id=username]').scrollIntoView().focus().type("tesjhonDoe1231")
    cy.get('[id=password]').scrollIntoView().focus().type(faker.internet.password())
    cy.wait(1000)
    cy.get('button[type="submit"]').click()
    cy.wait(1000)
})

Cypress.Commands.add('loginTestOK', () => {
    cy.get('[id=username]').scrollIntoView().focus().type("tesjhonDoe1231")
    cy.get('[id=password]').scrollIntoView().focus().type("pass1234")
    cy.wait(1000)
    // cy.get('[id=login-form]').submit()
    cy.get('button[type="submit"]').click()
    cy.wait(1000)
})
