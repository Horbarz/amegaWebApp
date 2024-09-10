Feature: User Registeration API Test
    The test is focused on test cases around registering users via the API

    Scenario: Test to ensure user registeration via the API is successful
        Given I have the registeration details
        When I send a PUT request to the "client-api/registration" API endpoint
        Then the response status code should be 200
        And the response should contain the "id"
        And the response should contain the "registrationToken"
        And the response should contain the "email"

    Scenario: Test to ensure registering with an existing email via the API fails with 400
        Given I have the registeration details
        When I send a PUT request to the "client-api/registration" API endpoint with an existing email
        Then the response status code should be 400

    Scenario: Test to ensure registering with an invalid email format via the API fails with 400
        Given I have the registeration details
        When I send a PUT request to the "client-api/registration" API endpoint with an invalid email format
        Then the response status code should be 400

    Scenario: Test to ensure registering with a password that is too short via the API fails with 400
        Given I have the registeration details
        When I send a PUT request to the "client-api/registration" API endpoint with a short password
        Then the response status code should be 400

    Scenario: Test to ensure registering without providing email via the API fails with 400
        Given I have the registeration details
        When I send a PUT request to the "client-api/registration" API endpoint without email
        Then the response status code should be 400
    
    Scenario: Test to ensure registering without providing email via the API fails with 400
        Given I have the registeration details
        When I send a PUT request to the "client-api/registration" API endpoint without password
        Then the response status code should be 400

    Scenario: Test to ensure that when I send too many registrations requests in a short time, it should return 429
        Given I have the registeration details
        When I send too many registrations requests in a short time
        Then the response status code should be 429