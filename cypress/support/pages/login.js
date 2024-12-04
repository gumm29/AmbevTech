Cypress.Commands.add('fazLoginPage', () => { 
    cy.visit(Cypress.env('frontUrl'))
    cy.fixture('login').then(it =>{
        cy.get('#email').type(it.email)
        cy.get('#password').type(it.password)
    })
    cy.get('[data-testid = entrar]').click()
    cy.get('h1').should('contain', 'Bem Vindo')
})