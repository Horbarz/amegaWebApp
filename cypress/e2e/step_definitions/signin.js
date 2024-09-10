import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {signinPage} from "../../pages/index";

const loginPage = new signinPage()

Given('users navigate to the app', () => {
    loginPage.elements.navigateToApp()
})

When('users enter {string} and {string}', (email, password) => {
    loginPage.enterCredentials(email,password)
})

When('users click login button', ()=> {
    loginPage.clickLoginBtn()
})

When('users click on the sign in nav button', () => {
    loginPage.clickSignInBtn()
})

When('mandatory field error is returned', () => {
    loginPage.verifyMandatoryFieldError()
})

Then('login is successful', () => {
    loginPage.verifyLoginSuccessful()
})

Then('login returns an error', () => {
    loginPage.verifyLoginUnsuccessful()
})
