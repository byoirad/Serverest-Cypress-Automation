import LoginPage from "../support/pages/loginPage"

describe('Dado que estou na página de login', function () {

  beforeEach(function () {
    cy.fixture('users').then(function (user) {
      this.user = user
    })
  })

  context('Quando preencho os campos com dados válidos', function () {

    it('Então o sistema deve fazer login de usuário NORMAL com sucesso', function () {

      const user = this.user.normal_user

      cy.deleteByEmail(user.email)
      cy.createUserApi(user)

      LoginPage.go()
      LoginPage.fillLoginForm(user)
      LoginPage.loginFormSubmitNormal()
    })

    it('Então o sistema deve fazer login de usuário ADMIN com sucesso', function () {

      const user = this.user.admin_user

      cy.deleteByEmail(user.email)
      cy.createUserApi(user)

      LoginPage.go()
      LoginPage.fillLoginForm(user)
      LoginPage.loginFormSubmitAdmin()
    })

  })
})