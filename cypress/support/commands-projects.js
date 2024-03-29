const { faker } = require('@faker-js/faker');

Cypress.Commands.add('checkProjectTest', () => {
    cy.get('[id=name]')
    cy.get('[id=type]')
    cy.get('[id=responsibleName]')
    cy.get('[id=role]')
    cy.get('[id=phone]')
    cy.get('[id=email]')
    cy.get('[id=country]')
    cy.get('[id=city]')
    cy.get('[id=address]')
    cy.get('[id=create-project-form]')
    cy.wait(1000)
})

Cypress.Commands.add('createProjectTestEmpty', () => {
    cy.get('[id=name]').scrollIntoView({duration: 600}).focus()
    cy.get('[id=type]').scrollIntoView({duration: 600}).focus()
    cy.get('[id=responsibleName]').scrollIntoView({duration: 600}).focus()
    cy.get('[id=role]').scrollIntoView({duration: 600}).focus()
    cy.get('[id=phone]').scrollIntoView({duration: 600}).focus()
    cy.get('[id=email]').scrollIntoView({duration: 600}).focus()
    cy.get('[id=country]').scrollIntoView({duration: 600}).focus()
    cy.get('[id=city]').scrollIntoView({duration: 600}).focus()
    cy.get('[id=address]').scrollIntoView({duration: 600}).focus()
    cy.get('button[type="submit"]').click()
    cy.wait(1000)
})

Cypress.Commands.add('createProjectTestNoEmail', () => {
    cy.get('[id=name]').scrollIntoView().focus().type(faker.person.jobTitle())
    cy.get('[id=type]').scrollIntoView().focus().type(faker.person.suffix()) 
    cy.get('[id=responsibleName]').scrollIntoView().focus().type(faker.lorem.word()) 
    cy.get('[id=role]').scrollIntoView().focus().type(faker.person.suffix()) 
    cy.get('[id=phone]').scrollIntoView().focus().type(faker.datatype.number({ min: 3001234567, max: 3209999999, precision: 1 }))
    cy.get('[id=email]').scrollIntoView({duration: 600}).focus()
    cy.get('[id=country]').scrollIntoView().focus().type(faker.location.country())
    cy.get('[id=city]').scrollIntoView().focus().type(faker.location.city())
    cy.get('[id=address]').scrollIntoView().focus().type(faker.location.streetAddress())
    cy.get('button[type="submit"]').click()
    cy.wait(1000) 
})

Cypress.Commands.add('createProjectTestNoAddress', () => {
    cy.get('[id=name]').scrollIntoView().focus().type(faker.person.jobTitle())
    cy.get('[id=type]').scrollIntoView().focus().type(faker.person.suffix()) 
    cy.get('[id=responsibleName]').scrollIntoView().focus().type(faker.lorem.word()) 
    cy.get('[id=role]').scrollIntoView().focus().type(faker.person.suffix()) 
    cy.get('[id=phone]').scrollIntoView().focus().type(faker.datatype.number({ min: 3001234567, max: 3209999999, precision: 1 }))
    cy.get('[id=email]').scrollIntoView().focus().type(faker.internet.email())
    cy.get('[id=country]').scrollIntoView().focus().type(faker.location.country())
    cy.get('[id=city]').scrollIntoView().focus().type(faker.location.city())
    cy.get('[id=address]').scrollIntoView({duration: 600}).focus()
    cy.get('button[type="submit"]').click()
    cy.wait(1000) 
})

Cypress.Commands.add('createProjectTestOK', () => {
    cy.get('[id=name]').scrollIntoView().focus().type(faker.person.jobTitle())
    cy.get('[id=type]').scrollIntoView().focus().type(faker.person.suffix()) 
    cy.get('[id=responsibleName]').scrollIntoView().focus().type(faker.lorem.word()) 
    cy.get('[id=role]').scrollIntoView().focus().type(faker.person.suffix()) 
    cy.get('[id=phone]').scrollIntoView().focus().type(faker.datatype.number({ min: 3001234567, max: 3209999999, precision: 1 }))
    cy.get('[id=email]').scrollIntoView().focus().type(faker.internet.email())
    cy.get('[id=country]').scrollIntoView().focus().type(faker.location.country())
    cy.get('[id=city]').scrollIntoView().focus().type(faker.location.city())
    cy.get('[id=address]').scrollIntoView().focus().type(faker.location.streetAddress())
    cy.get('button[type="submit"]').click()
    cy.wait(1000) 
})

Cypress.Commands.add('loginOK', () => {
    cy.get('[id=username]').scrollIntoView().focus().type("jhonDoe1231")
    cy.get('[id=password]').scrollIntoView().focus().type("pass1234")
    cy.get('button[type="submit"]').click()
    cy.wait(2000)
})
