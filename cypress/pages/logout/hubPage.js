///<reference types="cypress"/>

export class hubPage{
    clickHubLink(){
        cy.wait(5000)
        cy.contains('Hub').click()
    }

    verifyHubPage(){
        cy.wait(3000)
        cy.url().should('include','/hub')
    }

    clickSignOutButton(){
        cy.contains('Sign out').click()
    }

    verifyLogout(){
        cy.url().should('include','/logout')
        cy.wait(5000)
    }

    clickBackButton(){
        cy.go('back')
    }

    visitAnotherRoute(){
        //Intercept any request that results in a 404 error
        cy.intercept('GET', '/withdrawal', (req) => {
            req.reply({
                statusCode: 404,
                body: '404 - Page Not Found'
            })
        })

        cy.visit('/withdrawal')
    }

    verifyNotFoundPage(){
        cy.contains('404 - Page Not Found').should('be.visible')
    }

    verifyCookiesRemoved(){
        cy.getCookies().should('be.empty')
    }

    checkSessionCookie(){
        cy.getCookie('session_id').should('not.exist')
    }

}