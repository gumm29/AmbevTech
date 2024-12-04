import { faker } from '@faker-js/faker'

Cypress.Commands.add('listaUsuario', () => { 
    cy.fixture('usuarioPages').then(it => {
        cy.get('.card-body').eq(1).should('contain', it.listaUsuario.cardTitulo)
        cy.get('.card-body').eq(1).should('contain', it.listaUsuario.cardDescricao)
        cy.get('[data-testid=listarUsuarios]').click()
        cy.get('h1').should('have.text', it.listaUsuario.sessao)
    })
    cy.get('tbody tr').should('have.length.above', 1)
})

Cypress.Commands.add('cadastraUsuario', () => { 
    cy.fixture('usuarioPages').then(it => {
        cy.get('.card-body').first().should('contain', it.cadastraUsuario.cardTitulo)
        cy.get('.card-body').first().should('contain', it.cadastraUsuario.cardDescricao)
        cy.get('[data-testid=cadastrarUsuarios]').click()
        cy.get('h1').should('have.text', it.cadastraUsuario.sessao)
    })
    cy.get('#nome').type(faker.internet.username())
    cy.get('#email').type(faker.internet.email())
    cy.get('#password').type(faker.internet.password())

    cy.get('#administrador').click()
    cy.get('[data-testid=cadastrarUsuario]').click()
})

