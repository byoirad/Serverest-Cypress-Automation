import LoginPage from "../support/pages/loginPage"

describe('Dado que estou na página de login', function () {

  context('Quando preencho os campos com dados de usuário NORMAL válidos', function () {

    const data = {
      nome: 'Teste da Silva',
      email: 'teste_dasilva@gmail.com',
      password: 'testedasilvasenha'
    }

    it('Então o sitema deve logar com sucesso', function () {

      LoginPage.go()
      LoginPage.fillLoginForm(data)
      LoginPage.loginFormSubmit()
    })
  })
})