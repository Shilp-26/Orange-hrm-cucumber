package com.orangehrmlive.demo.cucumber.steps;

import com.orangehrmlive.demo.pages.AddUserPage;
import com.orangehrmlive.demo.pages.LoginPage;
import com.orangehrmlive.demo.pages.ViewSystemUsersPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import javax.security.auth.login.LoginContext;
import javax.swing.text.View;

public class UsersSteps {
    @Given("^User should login to the application$")
    public void userShouldLoginToTheApplication() {
        new LoginPage().loginToApplicaiton("Admin", "admin123");
    }

    @When("^User clicks on admin tab$")
    public void userClicksOnAdminTab() {
        new ViewSystemUsersPage().clickOnAdminTab();
    }

    @And("^User can see the \"([^\"]*)\" text$")
    public void userCanSeeTheText(String expMsg) {
        new ViewSystemUsersPage().verifySystemUsersText(expMsg);
    }

    @And("^user clicks on Add button$")
    public void userClicksOnAddButton() {
        new ViewSystemUsersPage().clickAddButton();
    }


    @And("^User clicks on save button$")
    public void userClicksOnSaveButton() {
        try {
            new AddUserPage().clickOnSaveButton();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @Then("^User can see the message \"([^\"]*)\"$")
    public void userCanSeeTheMessage(String expMsg) throws InterruptedException {
        new ViewSystemUsersPage().verifySuccessfullySavedMessage(expMsg);

    }

    @And("^user can see the message displayed \"([^\"]*)\"$")
    public void userCanSeeTheMessageDisplayed(String expMsg) {
        new AddUserPage().verifyAddUserText(expMsg);
    }


    @And("^User enters the details \"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void userEntersTheDetails(String uRole, String eName, String uName, String status, String pass, String cPass) {
        new AddUserPage().addUserDetails(uRole, eName, uName, status, pass, cPass);
    }

    @And("^User enters username \"([^\"]*)\"$")
    public void userEntersUsername(String username) {
        new ViewSystemUsersPage().inputUserName(username);
    }

    @And("^User selects role \"([^\"]*)\"$")
    public void userSelectsRole(String role) {
        new ViewSystemUsersPage().selectUserRole(role);
    }

    @And("^User selects status \"([^\"]*)\"$")
    public void userSelectsStatus(String status) {
        new ViewSystemUsersPage().selectUserStatus(status);
    }

    @And("^User clicks on search button$")
    public void userClicksOnSearchButton() {
        new ViewSystemUsersPage().clickOnSearchButton();
    }

    @Then("^User should see the user created in the result list$")
    public void userShouldSeeTheUserCreatedInTheResultList(String name) {
        new ViewSystemUsersPage().verifyUserInSearchResult(name);
    }

    @And("^User clicks on check box$")
    public void userClicksOnCheckBox() {
        new ViewSystemUsersPage().clickOnCheckBox();
    }

    @And("^User clicks on delete button$")
    public void userClicksOnDeleteButton() {
        new ViewSystemUsersPage().clickOnDeleteButton();
    }

    @And("^User accepts the popup$")
    public void userAcceptsThePopup() {
        new ViewSystemUsersPage().acceptPopUpMessage();
    }


    @Then("^User can see the \"([^\"]*)\" text displayed$")
    public void userCanSeeTheTextDisplayed(String expMsg)  {
       new ViewSystemUsersPage().verifyRecordSuccessfullyDeletedMessage(expMsg);
    }

    @Then("^User can verify the message \"([^\"]*)\"$")
    public void userCanVerifyTheMessage(String expMsg) {
        new ViewSystemUsersPage().verifyNoRecordFoundText(expMsg);
    }
}
