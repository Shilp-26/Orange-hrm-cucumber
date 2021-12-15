package com.orangehrmlive.demo.pages;

import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ViewSystemUsersPage extends Utility {

    private static final Logger log = LogManager.getLogger(ViewSystemUsersPage.class.getName());

    public ViewSystemUsersPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//h1[contains(text(),'System Users')]")
    WebElement systemUserTxt;

    @FindBy(xpath = "//b[contains(text(),'Admin')]")
    WebElement adminLink;

    @FindBy(id = "btnAdd")
    WebElement addBtn;

    @FindBy(xpath = "//div[contains(text(),'Successfully Saved')]")
    WebElement successfullySavedText;

    @FindBy(id = "searchSystemUser_userName")
    WebElement searchUserName;

    @FindBy(id = "searchSystemUser_userType")
    WebElement searchUserRole;

    @FindBy(id = "searchSystemUser_status")
    WebElement searchUserStatus;

    @FindBy(id = "searchBtn")
    WebElement searchBtn;

    @FindBy(xpath = "//a[contains(text(),'Ananya9')]")
    WebElement verifyResultList;

    @FindBy(xpath = "//input[@id='ohrmList_chkSelectAll']")
    WebElement checkBox;

    @FindBy(id = "btnDelete")
    WebElement deleteButton;

    @FindBy(id = "dialogDeleteBtn")
    WebElement deleteRecordPopUp;

    @FindBy(xpath = "//div[contains(text(),'Successfully Deleted')]")
    WebElement successFullyDeletedText;

    @FindBy(xpath = "//td[contains(text(),'No Records Found')]")
    WebElement noRecordFoundText;


    public void verifySystemUsersText(String text) {
        verifyThatTextIsDisplayed(systemUserTxt, text);
        log.info("Verifying 'System User' text  " + systemUserTxt.toString());
    }

    public void clickOnAdminTab() {
        clickOnElement(adminLink);
        log.info("Clicking on 'Admin' tab  " + adminLink.toString());
    }

    public void clickAddButton() {
        clickOnElement(addBtn);
        log.info("Clicking on 'Add' button  " + addBtn.toString());
    }

    public void verifySuccessfullySavedMessage(String text) throws InterruptedException {
        Thread.sleep(2000);
        verifyThatTextIsDisplayed(successfullySavedText, text);
        log.info("Verifying 'Successfully Saved' message  " + successfullySavedText.toString());
    }

    public void clickOnSearchButton() {
        clickOnElement(searchBtn);
        log.info("Clicking on Search button  " + searchBtn.toString());
    }

    public void inputUserName(String userName) {
        sendTextToElement(searchUserName, userName);
        log.info("Entering Username  " + searchUserName.toString());
    }

    public void selectUserRole(String role) {
        selectByVisibleTextFromDropDown(searchUserRole, role);
        log.info("Selecting User Role from dropdown  " + searchUserRole.toString());
    }

    public void selectUserStatus(String status) {
        selectByVisibleTextFromDropDown(searchUserStatus, status);
        log.info("Selecting User Status from dropdown  " + searchUserStatus.toString());
    }

    public void verifyUserInSearchResult(String userName) {
        verifyThatTextIsDisplayed(verifyResultList, userName);
        log.info("Verifying User is displayed in search result  " + verifyResultList.toString());
    }

    public void clickOnCheckBox() {
        clickOnElement(checkBox);
        log.info("Selecting user from search result  " + checkBox.toString());
    }

    public void clickOnDeleteButton() {
        clickOnElement(deleteButton);
        log.info("Clicking on Delete button to delete user  " + deleteButton.toString());
    }

    public void acceptPopUpMessage() {
        clickOnElement(deleteRecordPopUp);
        log.info("Closing Pop UP  " + deleteRecordPopUp.toString());
    }

    public void verifyRecordSuccessfullyDeletedMessage(String message) {
        verifyThatTextIsDisplayed(successFullyDeletedText, message);
        log.info("Verifying 'Successfully Deleted' message  " + successFullyDeletedText.toString());
    }

    public void verifyNoRecordFoundText(String message) {
        verifyThatTextIsDisplayed(noRecordFoundText, message);
        log.info("Verifying 'No Record Found' message  " + noRecordFoundText.toString());
    }

}
