// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getByEmail', (email) => {
    
    cy.api({
        url: 'https://serverest.dev/usuarios',
        method: 'GET',
    }).then(response => {
        expect(response.status).to.eql(200)
        const users = response.body.usuarios || response.body
        expect(Array.isArray(users)).to.be.true
        const user = users.find(u => u.email === email)
        return user
    })
})

Cypress.Commands.add('deleteByEmail', (email) => {
    cy.getByEmail(email).then(user => {
        expect(user).to.not.be.undefined
        const userId = user._id

        cy.api({
            url: `https://serverest.dev/usuarios/${userId}`,
            method: 'DELETE',
        })
    })
})

Cypress.Commands.add('createUserApi', (user) => {
    cy.api({
        url: 'https://serverest.dev/usuarios',
        method: 'POST',
        body: {
          nome: user.nome,
          email: user.email,
          password: user.password,
          administrador: user.admin
        }
        }).then(response => {
          expect(response.status).to.eql(201)
          expect(response.body.message).to.contains('Cadastro realizado com sucesso')
      })
})