package com.orangehrmlive.demo.cucumber.steps;

import com.orangehrmlive.demo.pages.HomePage;
import com.orangehrmlive.demo.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.commons.logging.Log;

public class LoginSteps {
    @Given("^User is on Homepage$")
    public void userIsOnHomepage() {
    }

    @And("^User enters password \"([^\"]*)\"$")
    public void userEntersPassword(String password) {
        new LoginPage().enterPassword(password);
    }

    @And("^User clicks on login button$")
    public void userClicksOnLoginButton() {
        new LoginPage().clickOnLoginBtn();
    }

    @Then("^User can the welcome message \"([^\"]*)\"$")
    public void userCanTheWelcomeMessage(String expMsg) {
        new HomePage().verifyWelcomeText(expMsg);
    }

    @When("^User enters login username \"([^\"]*)\"$")
    public void userEntersLoginUsername(String username) {
        new LoginPage().enterUsername(username);
    }

    @Given("^User is logged into the application$")
    public void userIsLoggedIntoTheApplication() {
        new LoginPage().loginToApplicaiton("Admin", "admin123");
    }

    @Then("^User can see the logo displayed$")
    public void userCanSeeTheLogoDisplayed() {
        new HomePage().verifyOrangeHrmLogoIsVisible();
    }

    @When("^User clicks on user profile logo$")
    public void userClicksOnUserProfileLogo() {
        new HomePage().clickOnProfileLogo();
    }

    @And("^User mouse hovers and clicks on logout$")
    public void userMouseHoversAndClicksOnLogout() {
        try {
            new HomePage().clickOnLogout();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @Then("^user can see the login page displayed \"([^\"]*)\"$")
    public void userCanSeeTheLoginPageDisplayed(String expMsg) {
        new LoginPage().verifyLoginPanelTxt(expMsg);
    }
}
