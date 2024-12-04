Cypress.Commands.add('login', (status = 200) => { 
    cy.fixture('login').then(body => {
        cy.request({
            method: 'POST',
            url: `${Cypress.env('backUrl')}/login`,
            headers: {
                'accept': 'application/json' ,
                'Content-Type': 'application/json'
            },
            body: body
        }).then(response =>{
            cy.log(JSON.stringify(response.body))
            if(status === 200){
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('message')
                expect(response.body).to.have.property('authorization')
                expect(response.body.message).to.eq('Login realizado com sucesso')
                cy.writeFile('cypress/fixtures/token.json', {token: response.body.authorization})
            }
        })
    })
})