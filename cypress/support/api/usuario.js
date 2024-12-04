Cypress.Commands.add('cadastraUsuarioHooks', () => { 
    cy.fixture('usuario').then(body => {
        cy.request({
            method: 'POST',
            url: `${Cypress.env('backUrl')}/usuarios`,
            headers: {
                'accept': 'application/json' ,
                'Content-Type': 'application/json'
            },
            body: body,
            failOnStatusCode: false
        }).then(response =>{
            cy.log(JSON.stringify(response.status))
        })
    })
})