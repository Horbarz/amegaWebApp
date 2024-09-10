import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {hubPage} from "../../pages/index";
import {validCredentials} from "../../fixtures/users"

const hubPageItems = new hubPage();

When('sign in successfully', ()=> {
    cy.login(validCredentials.username, validCredentials.password)
})

When('users click on the hub link', ()=>{
    hubPageItems.clickHubLink()
})

When('users click on signout button', ()=> {
    hubPageItems.clickSignOutButton()
})

Then('verify hub page', ()=>{
    hubPageItems.verifyHubPage()
})

When('verify signout successful', () => {
    hubPageItems.verifyLogout()
})

When('users click on the back button', () => {
    hubPageItems.clickBackButton()
})

When('users attempt to access a protected route after logout', ()=>{
    hubPageItems.visitAnotherRoute()
})

Then('verify not found page', () => {
    hubPageItems.verifyNotFoundPage()
})

Then('verify cookies are removed', ()=> {
    hubPageItems.verifyCookiesRemoved()
})

Then('check if session cookie is cleared', ()=> {
    hubPageItems.checkSessionCookie()
})