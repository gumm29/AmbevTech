describe('Usuario', () => {
    beforeEach(() => cy.fazLoginPage() )
    it('Lista usuarios', () => {
        cy.listaUsuario()
    })

    it('Cadastra usuario', () => {
        cy.cadastraUsuario()
    })
  })
  