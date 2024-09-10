Feature: Logout Functionality
    The test is focused on test cases around logging out a user

    Background: Navigate into the app
        Given users navigate to the app

    
    Scenario: Test to ensure users can successfully log out by clicking the "Logout" button.
        When users click on the sign in nav button
        When sign in successfully
        When users click on the hub link
        Then verify hub page
        When users click on signout button
        Then verify signout successful

    Scenario: Test to ensure users cannot click on back button to access previous page after Logout
        When users click on the sign in nav button
        When sign in successfully
        When users click on the hub link
        Then verify hub page
        When users click on signout button
        Then verify signout successful
        When users click on the back button
        Then verify signout successful

    Scenario: Test to ensure the app invalidates the session handling after logout
        When users click on the sign in nav button
        When sign in successfully
        When users click on the hub link
        Then verify hub page
        When users click on signout button
        Then verify signout successful
        When users attempt to access a protected route after logout
        Then verify not found page

    Scenario: Test to ensure the app removes session cookies after logout
        When users click on the sign in nav button
        When sign in successfully
        When users click on the hub link
        Then verify hub page
        When users click on signout button
        Then verify signout successful
        And verify cookies are removed
        And check if session cookie is cleared