Feature: Users Test
  Testing the users functionalities


  Scenario: Admin should add user successfully
    Given User should login to the application
    When User clicks on admin tab
    And User can see the "System Users" text
    And user clicks on Add button
    And user can see the message displayed "Add User"
    And User enters the details "Admin", "Ananya Dash","AnanyaPrime123","Disabled","Dash0981","Dash0981"
    And User clicks on save button
    Then User can see the message "Successfully Saved"

Scenario: Search the user created
  Given User should login to the application
  When User clicks on admin tab
  And User can see the "System Users" text
  And User enters username "AnanyaPrime123"
  And User selects role "Admin"
  And User selects status "Disabled"
  And User clicks on search button
  Then User should see the user created in the result list

  Scenario: Admin should be able to delete the user successfully
    Given User should login to the application
    When User clicks on admin tab
    And User can see the "System Users" text
    And User enters username "AnanyaPrime123"
    And User selects role "Admin"
    And User selects status "Disabled"
    And User clicks on search button
    And User clicks on check box
    And User clicks on delete button
    And User accepts the popup
    Then User can see the "Successfully Deleted" text displayed

Scenario: search the deleted user to verify the message no record found
  Given User should login to the application
  When User clicks on admin tab
  And User can see the "System Users" text
  And User enters username "AnanyaPrime123"
  And User selects role "Admin"
  And User selects status "Disabled"
  And User clicks on search button
  Then User can verify the message "No Records Found"