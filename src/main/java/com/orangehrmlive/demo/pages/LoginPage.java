package com.orangehrmlive.demo.pages;

import com.aventstack.extentreports.Status;
import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(id = "txtUsername")
    WebElement username;

    @FindBy(id = "txtPassword")
    WebElement password;

    @FindBy(id = "btnLogin")
    WebElement loginBtn;

    @FindBy(xpath = "//div[text()='LOGIN Panel']")
    WebElement loginPanelTxt;

    public void enterUsername(String name) {
        sendTextToElement(username, name);
        log.info("Entering Username  " + username.toString());
    }

    public void enterPassword(String pass) {
        sendTextToElement(password, pass);
        log.info("Entering Password  " + password.toString());
    }
    public void clickOnLoginBtn(){
        clickOnElement(loginBtn);
        log.info("Clicking on Login button  " + loginBtn.toString());

    }
    public void verifyLoginPanelTxt(String expMsg){
        verifyThatTextIsDisplayed(loginPanelTxt,expMsg);
        log.info("Verifying 'LOGIN Panel' text  " + loginPanelTxt.toString());
    }

    public void loginToApplicaiton(String usrname, String passwd) {

        sendTextToElement(username, usrname);


        sendTextToElement(password, passwd);


        clickOnElement(loginBtn);

    }
}
