const { faker } = require('@faker-js/faker');

Cypress.Commands.add('searchCandidateTestCheck', () => {
    cy.get('[id=role]')
    cy.get('[id=softSkillsComplete]')
    cy.get('[id=technicalSkillsComplete]')
    cy.get('[id=search-candidate-form]')
    cy.wait(1000)
})

Cypress.Commands.add('searchCandidateTestEmpty', () => {
    cy.get('[id=role]').scrollIntoView({duration: 600}).focus()
    cy.get('[id=softSkillsComplete]').scrollIntoView().focus()
    cy.get('[id=technicalSkillsComplete]').scrollIntoView().focus()
    cy.get('[id=search-candidate-form]')
    // cy.get('button[type="submit"]').click()
    cy.wait(1000)
})

Cypress.Commands.add('searchCandidateTestNoRole', () => {
    cy.get('[id=role]').scrollIntoView({duration: 600}).focus()
    cy.get('[id=softSkillsComplete]').scrollIntoView().focus().type(faker.lorem.word())
    cy.get('[id=technicalSkillsComplete]').scrollIntoView().focus().type(faker.lorem.word())
    cy.get('[id=search-candidate-form]')
    // cy.get('button[type="submit"]').click()
    cy.wait(1000) 
})

Cypress.Commands.add('searchCandidateTestOK', () => {
    cy.get('[id=role]').scrollIntoView().focus().type(faker.lorem.word())
    cy.get('[id=softSkillsComplete]').scrollIntoView().focus().type("Communication").click()
    cy.get('[id=technicalSkillsComplete]').scrollIntoView().focus().type("DevOps").click()
    cy.get('[id=search-candidate-form]')
    // cy.get('button[type="submit"]').click()
    cy.wait(1000) 
})

Cypress.Commands.add('loginOK', () => {
    cy.get('[id=username]').scrollIntoView().focus().type("jhonDoe1231")
    cy.get('[id=password]').scrollIntoView().focus().type("pass1234")
    cy.get('button[type="submit"]').click()
    cy.wait(2000)
})
