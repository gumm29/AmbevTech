import { faker } from '@faker-js/faker'

Cypress.Commands.add('criaProduto', (status = 201) => { 
    cy.fixture('produto').then(body => {
        const numberRand = Math.floor(Math.random() * 90000)
        body.nome = `${faker.commerce.product()} ${numberRand}`
        cy.log(body.nome)
        cy.readFile('cypress/fixtures/token.json').then(it => {
            cy.request({
                method: 'POST',
                url: `${Cypress.env('backUrl')}/produtos`,
                headers: {
                    'accept': 'application/json' ,
                    'Content-Type': 'application/json',
                    'Authorization': it.token
                },
                body: body,
                failOnStatusCode: false
            }).then(response =>{
                cy.log(JSON.stringify(response.body))
                if(status === 201){
                    expect(response.status).to.eq(201)
                    expect(response.body).to.have.property('message')
                    expect(response.body).to.have.property('_id')
                    expect(response.body.message).to.eq('Cadastro realizado com sucesso')
                    expect(response.body._id).to.not.eq(null)
                    cy.writeFile('cypress/fixtures/produtoId.json', {id: response.body._id})
                }
            })
        })
    })
})


Cypress.Commands.add('deletaProduto', (status = 200) => { 
    cy.fixture('produto').then(body => {
        const numberRand = Math.floor(Math.random() * 90000)
        body.nome = `${faker.commerce.product()} ${numberRand}`
        cy.log(body.nome)
        cy.readFile('cypress/fixtures/token.json').then(it => {
            cy.readFile('cypress/fixtures/produtoId.json').then(produto => {
                cy.request({
                    method: 'DELETE',
                    url: `${Cypress.env('backUrl')}/produtos/${produto.id}`,
                    headers: {
                        'accept': 'application/json' ,
                        'Content-Type': 'application/json',
                        'Authorization': it.token
                    },
                    failOnStatusCode: false
                }).then(response =>{
                    cy.log(JSON.stringify(response.body))
                    if(status === 200){
                        expect(response.status).to.eq(200)
                        expect(response.body).to.have.property('message')
                        expect(response.body.message).to.eq('Registro excluído com sucesso')
                    }
                })
            })
        })
    })
})
