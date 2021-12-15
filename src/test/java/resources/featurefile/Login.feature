Feature: Login Test
  User should be able to login and log out successfully

  @Smoke @Regression
  Scenario: User should login successfully
    Given User is on Homepage
    When User enters login username "Admin"
    And User enters password "admin123"
    And User clicks on login button
    Then User can the welcome message "Welcome"

  @Sanity @Regression
  Scenario:Verify the logo is displayed
    Given User is logged into the application
    Then User can see the logo displayed

  @Regression
  Scenario:User should log out successfully
    Given User is logged into the application
    When User clicks on user profile logo
    And User mouse hovers and clicks on logout
    Then user can see the login page displayed "LOGIN Panel"
