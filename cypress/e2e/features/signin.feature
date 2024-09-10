Feature: Authentication Feature
    The test is focused on test cases around authenticating users

    Background: Navigate into the app
        Given users navigate to the app

    Scenario: Test to ensure when users provide valid credentials, login is successful
        When users click on the sign in nav button
        When users enter "<email>" and "<password>"
        When users click login button
        Then login is successful
        Examples:
        |email|password|
        |abioyeobaloluwapeter@gmail.com|P@ssword1|
    
    Scenario: Test to ensure when users provide invalid credentials, login returns an error
        When users click on the sign in nav button
        When users enter "<email>" and "<password>"
        When users click login button
        Then login returns an error
        Examples:
        |email|password|
        |jack@gmail.com|pass|

    Scenario: Test to ensure when users provide valid email and invalid password, login returns an error
        When users click on the sign in nav button
        When users enter "<email>" and "<password>"
        When users click login button
        Then login returns an error
        Examples:
        |email|password|
        |abioyeobaloluwapeter@gmail.com|pass|

    Scenario: Test to ensure when users provide invalid email and valid password, login returns an error
        When users click on the sign in nav button
        When users enter "<email>" and "<password>"
        When users click login button
        Then login returns an error
        Examples:
        |email|password|
        |abioyeobaloluwa@gmail.com|P@ssword1|

    Scenario: Test to ensure when users provide empty email and empty password, login returns an error
        When users click on the sign in nav button
        When users click login button
        Then mandatory field error is returned
   