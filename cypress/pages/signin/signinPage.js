///<reference types="cypress"/>

export class signinPage{
    elements = {
        navigateToApp: () => cy.visit('/'),
        emailInput: () => cy.get(':nth-child(1) > [data-testid="input"]'),
        passwordInput: () => cy.get(':nth-child(2) > [data-testid="input"]'),
        loginBtn: () => cy.get('[data-testid="test-submit"]'),
        dashboardElement: () => cy.get('#section-welcome')
    }

    clickSignInBtn(){
        cy.get('[data-cy="sign_in"]').click()
    }

    enterCredentials(email,password){
        this.elements.emailInput().type(email)
        this.elements.passwordInput().type(password)
    }

    clickLoginBtn(){
        this.elements.loginBtn().click()
    }

    verifyLoginSuccessful(){
        cy.wait(2000)
        this.elements.dashboardElement().contains('Welcome to Amega!')
        cy.contains("Let's get you started!")
        cy.contains('Wallets')
        cy.contains('My Accounts')
    }

    toggleRememberMeBtn(){
        cy.contains('Remember me').click()
    }

    verifyLoginUnsuccessful(){
        cy.wait(2000)
        cy.contains('Incorrect email or password')
    }

    verifyMandatoryFieldError(){
        cy.contains('This field is mandatory')
    }
}