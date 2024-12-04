describe('Produto', () => {
    before(() => cy.login(200))

    it('Cadastra produto com sucesso', () => cy.criaProduto())

    it('Deleta produto com sucesso', () => cy.deletaProduto())
})