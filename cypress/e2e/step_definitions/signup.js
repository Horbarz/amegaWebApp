import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { newUser } from "../../fixtures/users";

let apiResponse;

Given('I have the registeration details', ()=>{
    //Setup registeration details
    
})

When('I send a PUT request to the {string} API endpoint', (endpoint)=> {
    const timestamp = Date.now();
    const email = `user${timestamp}@yopmail.com`;
    cy.request('PUT', Cypress.env('apiBaseUrl')+endpoint, {
        "email": email,
        "password": newUser.password,
        "firstName": newUser.firstName,
        "lastName": newUser.lastName,
        "document_group_1": true,
        "country": "NG",
        "customFields": {
            "custom_app_registration": false
        }
    }).then((response) => {
        apiResponse = response;
    })
})

When('I send a PUT request to the {string} API endpoint with an existing email', (endpoint)=> {
    cy.request({
        method: 'PUT',
        url: Cypress.env('apiBaseUrl')+endpoint,
        failOnStatusCode: false,
        body:{
            "email": newUser.email,
            "password": newUser.password,
            "firstName": newUser.firstName,
            "lastName": newUser.lastName,
            "document_group_1": true,
            "country": "NG",
            "customFields": {
                "custom_app_registration": false
            }
        }
    }).then((response) => {
        apiResponse = response;
    })
})

When('I send a PUT request to the {string} API endpoint with a short password', (endpoint)=> {
    const timestamp = Date.now();
    const email = `user${timestamp}@yopmail.com`;
    cy.request({
        method: 'PUT',
        url: Cypress.env('apiBaseUrl')+endpoint,
        failOnStatusCode: false,
        body:{
            "email": email,
            "password": newUser.shortPassword,
            "firstName": newUser.firstName,
            "lastName": newUser.lastName,
            "document_group_1": true,
            "country": "NG",
            "customFields": {
                "custom_app_registration": false
            }
        }
    }).then((response) => {
        apiResponse = response;
    })
})

When('I send a PUT request to the {string} API endpoint with an invalid email format', (endpoint)=> {
    cy.request({
        method: 'PUT',
        url: Cypress.env('apiBaseUrl')+endpoint,
        failOnStatusCode: false,
        body:{
            "email": newUser.invalidEmail,
            "password": newUser.password,
            "firstName": newUser.firstName,
            "lastName": newUser.lastName,
            "document_group_1": true,
            "country": "NG",
            "customFields": {
                "custom_app_registration": false
            }
        }
    }).then((response) => {
        apiResponse = response;
    })
})

When('I send a PUT request to the {string} API endpoint without email', (endpoint)=> {
    cy.request({
        method: 'PUT',
        url: Cypress.env('apiBaseUrl')+endpoint,
        failOnStatusCode: false,
        body:{
            "email": null,
            "password": newUser.password,
            "firstName": newUser.firstName,
            "lastName": newUser.lastName,
            "document_group_1": true,
            "country": "NG",
            "customFields": {
                "custom_app_registration": false
            }
        }
    }).then((response) => {
        apiResponse = response;
    })
})

When('I send too many registrations requests in a short time', ()=> {
    const timestamp = Date.now();
    const email = `user${timestamp}@yopmail.com`;
    const userData = {
        "email": email,
        "password": newUser.password,
        "firstName": newUser.firstName,
        "lastName": newUser.lastName,
        "document_group_1": true,
        "country": "NG",
        "customFields": {
            "custom_app_registration": false
        }
    }
    const maxAttempts = 20; //Number of times I want to attempt registeration
    //use cypress times to loop amd send multiple requests
    Cypress._.times(maxAttempts, (i) => {
        //cy.log(i)
        const email = `user${timestamp}${i}@yopmail.com`;
        cy.request({
            method: 'PUT',
            url: Cypress.env('apiBaseUrl')+'client-api/registration',
            failOnStatusCode: false,
            body:{
                
                    "email": email,
                    "password": newUser.password,
                    "firstName": newUser.firstName,
                    "lastName": newUser.lastName,
                    "document_group_1": true,
                    "country": "NG",
                    "customFields": {
                        "custom_app_registration": false
                    }
            }
        }).then((response) => {
            // cy.log(`Attempt ${i + 1}: Status - ${response.status}`);
            // cy.log(`Response Body: ${JSON.stringify(response.body)}`);
            if(i<10){
                expect(response.status).to.eq(200)
            }else{
                expect(response.status).to.eq(429)
            }
        })        
    })
})


When('I send a PUT request to the {string} API endpoint without password', (endpoint)=> {
    const timestamp = Date.now();
    const email = `user${timestamp}@yopmail.com`;
    cy.request({
        method: 'PUT',
        url: Cypress.env('apiBaseUrl')+endpoint,
        failOnStatusCode: false,
        body:{
            "email": email,
            "password": null,
            "firstName": newUser.firstName,
            "lastName": newUser.lastName,
            "document_group_1": true,
            "country": "NG",
            "customFields": {
                "custom_app_registration": false
            }
        }
    }).then((response) => {
        apiResponse = response;
    })
})

Then('the response status code should be {int}', (statusCode)=>{
    expect(apiResponse.status).to.eq(statusCode)
})

Then('the response should contain the {string}', (props)=>{
    expect(apiResponse.body).to.have.property(props)
})