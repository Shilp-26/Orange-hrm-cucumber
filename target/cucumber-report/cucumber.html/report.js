$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "User should be able to login and log out successfully",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7802035600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should login successfully",
  "description": "",
  "id": "login-test;user-should-login-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters login username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User can the welcome message \"Welcome\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 202345900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 28
    }
  ],
  "location": "LoginSteps.userEntersLoginUsername(String)"
});
formatter.result({
  "duration": 201935600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 22
    }
  ],
  "location": "LoginSteps.userEntersPassword(String)"
});
formatter.result({
  "duration": 126613800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClicksOnLoginButton()"
});
formatter.result({
  "duration": 2617278200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome",
      "offset": 30
    }
  ],
  "location": "LoginSteps.userCanTheWelcomeMessage(String)"
});
formatter.result({
  "duration": 45707300,
  "status": "passed"
});
formatter.after({
  "duration": 1098086800,
  "status": "passed"
});
formatter.before({
  "duration": 3609418500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify the logo is displayed",
  "description": "",
  "id": "login-test;verify-the-logo-is-displayed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "User is logged into the application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User can see the logo displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userIsLoggedIntoTheApplication()"
});
formatter.result({
  "duration": 3724991800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userCanSeeTheLogoDisplayed()"
});
formatter.result({
  "duration": 100625600,
  "status": "passed"
});
formatter.after({
  "duration": 979820800,
  "status": "passed"
});
formatter.before({
  "duration": 3535167600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should log out successfully",
  "description": "",
  "id": "login-test;user-should-log-out-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "User is logged into the application",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clicks on user profile logo",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User mouse hovers and clicks on logout",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user can see the login page displayed \"LOGIN Panel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userIsLoggedIntoTheApplication()"
});
formatter.result({
  "duration": 2997139600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClicksOnUserProfileLogo()"
});
formatter.result({
  "duration": 95033500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userMouseHoversAndClicksOnLogout()"
});
formatter.result({
  "duration": 1688649000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LOGIN Panel",
      "offset": 39
    }
  ],
  "location": "LoginSteps.userCanSeeTheLoginPageDisplayed(String)"
});
formatter.result({
  "duration": 69480500,
  "status": "passed"
});
formatter.after({
  "duration": 879236800,
  "status": "passed"
});
formatter.uri("Users.feature");
formatter.feature({
  "line": 1,
  "name": "Users Test",
  "description": "Testing the users functionalities",
  "id": "users-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3767911700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Admin should add user successfully",
  "description": "",
  "id": "users-test;admin-should-add-user-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User should login to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on admin tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User can see the \"System Users\" text",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user can see the message displayed \"Add User\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters the details \"Admin\", \"Ananya Dash\",\"AnanyaPrime123\",\"Disabled\",\"Dash0981\",\"Dash0981\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on save button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User can see the message \"Successfully Saved\"",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersSteps.userShouldLoginToTheApplication()"
});
formatter.result({
  "duration": 2988372200,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.userClicksOnAdminTab()"
});
formatter.result({
  "duration": 964776100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "System Users",
      "offset": 18
    }
  ],
  "location": "UsersSteps.userCanSeeTheText(String)"
});
formatter.result({
  "duration": 64090800,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.userClicksOnAddButton()"
});
formatter.result({
  "duration": 571685400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add User",
      "offset": 36
    }
  ],
  "location": "UsersSteps.userCanSeeTheMessageDisplayed(String)"
});
formatter.result({
  "duration": 60919300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 25
    },
    {
      "val": "Ananya Dash",
      "offset": 34
    },
    {
      "val": "AnanyaPrime123",
      "offset": 48
    },
    {
      "val": "Disabled",
      "offset": 65
    },
    {
      "val": "Dash0981",
      "offset": 76
    },
    {
      "val": "Dash0981",
      "offset": 87
    }
  ],
  "location": "UsersSteps.userEntersTheDetails(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 735994100,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.userClicksOnSaveButton()"
});
formatter.result({
  "duration": 1122015200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Successfully Saved",
      "offset": 26
    }
  ],
  "location": "UsersSteps.userCanSeeTheMessage(String)"
});
formatter.result({
  "duration": 2078364500,
  "status": "passed"
});
formatter.after({
  "duration": 903555400,
  "status": "passed"
});
formatter.before({
  "duration": 3685951600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Search the user created",
  "description": "",
  "id": "users-test;search-the-user-created",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "User should login to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clicks on admin tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User can see the \"System Users\" text",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters username \"AnanyaPrime123\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User selects role \"Admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User selects status \"Disabled\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should see the user created in the result list",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersSteps.userShouldLoginToTheApplication()"
});
formatter.result({
  "duration": 2908094700,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.userClicksOnAdminTab()"
});
formatter.result({
  "duration": 1034855400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "System Users",
      "offset": 18
    }
  ],
  "location": "UsersSteps.userCanSeeTheText(String)"
});
formatter.result({
  "duration": 66524200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AnanyaPrime123",
      "offset": 22
    }
  ],
  "location": "UsersSteps.userEntersUsername(String)"
});
formatter.result({
  "duration": 118185400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 19
    }
  ],
  "location": "UsersSteps.userSelectsRole(String)"
});
formatter.result({
  "duration": 115966300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Disabled",
      "offset": 21
    }
  ],
  "location": "UsersSteps.userSelectsStatus(String)"
});
formatter.result({
  "duration": 105900500,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.userClicksOnSearchButton()"
});
formatter.result({
  "duration": 514075200,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.userShouldSeeTheUserCreatedInTheResultList(String)"
});
formatter.result({
  "duration": 282500,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.orangehrmlive.demo.cucumber.steps.UsersSteps.userShouldSeeTheUserCreatedInTheResultList(String) in file:/C:/Users/shilp/IdeaProjects/orange-cucumber/target/test-classes/\u0027 with pattern [^User should see the user created in the result list$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: Then User should see the user created in the result list\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1541613600,
  "status": "passed"
});
formatter.before({
  "duration": 3977680300,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Admin should be able to delete the user successfully",
  "description": "",
  "id": "users-test;admin-should-be-able-to-delete-the-user-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "User should login to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "User clicks on admin tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User can see the \"System Users\" text",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User enters username \"AnanyaPrime123\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User selects role \"Admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User selects status \"Disabled\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User clicks on check box",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User clicks on delete button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User accepts the popup",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User can see the \"Successfully Deleted\" text displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersSteps.userShouldLoginToTheApplication()"
});
formatter.result({
  "duration": 2858391200,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.userClicksOnAdminTab()"
});
formatter.result({
  "duration": 1177575900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "System Users",
      "offset": 18
    }
  ],
  "location": "UsersSteps.userCanSeeTheText(String)"
});
formatter.result({
  "duration": 51532700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AnanyaPrime123",
      "offset": 22
    }
  ],
  "location": "UsersSteps.userEntersUsername(String)"
});
formatter.result({
  "duration": 122261400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 19
    }
  ],
  "location": "UsersSteps.userSelectsRole(String)"
});
formatter.result({
  "duration": 111519400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Disabled",
      "offset": 21
    }
  ],
  "location": "UsersSteps.userSelectsStatus(String)"
});
formatter.result({
  "duration": 112553200,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.userClicksOnSearchButton()"
});
formatter.result({
  "duration": 494157000,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.userClicksOnCheckBox()"
});
formatter.result({
  "duration": 128456700,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.userClicksOnDeleteButton()"
});
formatter.result({
  "duration": 86097300,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.userAcceptsThePopup()"
});
formatter.result({
  "duration": 831113200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Successfully Deleted",
      "offset": 18
    }
  ],
  "location": "UsersSteps.userCanSeeTheTextDisplayed(String)"
});
formatter.result({
  "duration": 54964500,
  "status": "passed"
});
formatter.after({
  "duration": 987304100,
  "status": "passed"
});
formatter.before({
  "duration": 3478275800,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "search the deleted user to verify the message no record found",
  "description": "",
  "id": "users-test;search-the-deleted-user-to-verify-the-message-no-record-found",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "User should login to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "User clicks on admin tab",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User can see the \"System Users\" text",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User enters username \"AnanyaPrime123\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User selects role \"Admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User selects status \"Disabled\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User can verify the message \"No Records Found\"",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersSteps.userShouldLoginToTheApplication()"
});
formatter.result({
  "duration": 2945966400,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.userClicksOnAdminTab()"
});
formatter.result({
  "duration": 901368400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "System Users",
      "offset": 18
    }
  ],
  "location": "UsersSteps.userCanSeeTheText(String)"
});
formatter.result({
  "duration": 58605000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AnanyaPrime123",
      "offset": 22
    }
  ],
  "location": "UsersSteps.userEntersUsername(String)"
});
formatter.result({
  "duration": 121484500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 19
    }
  ],
  "location": "UsersSteps.userSelectsRole(String)"
});
formatter.result({
  "duration": 117411500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Disabled",
      "offset": 21
    }
  ],
  "location": "UsersSteps.userSelectsStatus(String)"
});
formatter.result({
  "duration": 117536800,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.userClicksOnSearchButton()"
});
formatter.result({
  "duration": 490767000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No Records Found",
      "offset": 29
    }
  ],
  "location": "UsersSteps.userCanVerifyTheMessage(String)"
});
formatter.result({
  "duration": 44098100,
  "status": "passed"
});
formatter.after({
  "duration": 902781400,
  "status": "passed"
});
});