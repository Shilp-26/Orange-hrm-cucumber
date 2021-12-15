package com.orangehrmlive.demo.pages;


import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AddUserPage extends Utility {
    private static final Logger log = LogManager.getLogger(AddUserPage.class.getName());

    public AddUserPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Add User')]")
    WebElement addUserTxt;

    @CacheLookup
    @FindBy(id = "systemUser_userType")
    WebElement userRole;

    @CacheLookup
    @FindBy(id = "systemUser_employeeName_empName")
    WebElement employeeName;

    @CacheLookup
    @FindBy(id = "systemUser_userName")
    WebElement userName;

    @CacheLookup
    @FindBy(id = "systemUser_status")
    WebElement status;

    @CacheLookup
    @FindBy(id = "systemUser_password")
    WebElement password;

    @CacheLookup
    @FindBy(id = "systemUser_confirmPassword")
    WebElement confirmPassword;

    @CacheLookup
    @FindBy(xpath = "//input[@id='btnSave']")
    WebElement saveBtn;

    public void addUserDetails(String uRole, String ename, String uName,
                               String estatus, String passwd, String cpasswd) {
        selectByVisibleTextFromDropDown(userRole, uRole);
        log.info("Selecting User Role from dropdown " + userRole.toString());
        sendTextToElement(employeeName, ename);
        log.info("Entering Employee name  " + employeeName.toString());
        sendTextToElement(userName, uName);
        log.info("Entering Username  " + userName.toString());
        selectByVisibleTextFromDropDown(status, estatus);
        log.info("Selecting Status from dropdown  " + status.toString());
        sendTextToElement(password, passwd);
        log.info("Entering Password  " + password.toString());
        sendTextToElement(confirmPassword, cpasswd);
        log.info("Entering Confirm Password  " + confirmPassword.toString());
    }
        public void clickOnSaveButton () throws InterruptedException {
            Thread.sleep(1000);
            clickOnElement(saveBtn);
            log.info("Clicking on Save button  " + saveBtn.toString());
        }

        public void verifyAddUserText (String text){
            verifyThatTextIsDisplayed(addUserTxt, text);
            log.info("Verifying 'Add User' text is displayed  " + addUserTxt.toString());
        }
    }


