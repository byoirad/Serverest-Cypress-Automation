import { el } from "./elements"

const LoginPage = {

    go: function () {
        cy.visit('/')
        cy.get(el.loginForm)
            .should('be.visible')
    },

    fillLoginForm: function (data) {
        cy.get(el.inputEmail).type(data.email)
        cy.get(el.inputPassword).type(data.password)
    },

    loginFormSubmitNormal: function () {
        cy.get(el.loginButton).click()

        cy.get('div section[class="row espacamento"]')
            .should('be.visible')
    },

    loginFormSubmitAdmin: function(){
        cy.get(el.loginButton).click()
        
        cy.get('p[class="lead"]').should('have.text', 'Este é seu sistema para administrar seu ecommerce.')
    }

}

export default LoginPage