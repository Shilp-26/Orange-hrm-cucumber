package com.orangehrmlive.demo.pages;

import com.aventstack.extentreports.Status;
import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class HomePage extends Utility {


    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//img[@alt='OrangeHRM']")
    WebElement orangeHrmLogo;

    @FindBy(xpath = "//b[contains(text(),'Admin')]")
    WebElement adminLink;

    @FindBy(xpath = "//b[contains(text(),'PIM')]")
    WebElement pimLink;

    @FindBy(id = "welcome")
    WebElement welcomeText;

    @FindBy(id = "welcome")
    WebElement profileLink;

    @FindBy(xpath = "//a[contains(text(),'Logout')]")
    WebElement logout;


    public void verifyWelcomeText(String message){
        verifyThatTextIsDisplayed(welcomeText, message);
        log.info("Verifying 'Welcome' message  " + welcomeText.toString());

    }

    public void verifyOrangeHrmLogoIsVisible(){
        verifyThatElementIsDisplayed(orangeHrmLogo);
        log.info("Verifying 'Orange Hrm' logo  " + orangeHrmLogo.toString());
    }

    public void clickOnProfileLogo(){
        clickOnElement(profileLink);
        log.info("Clicking on Profile logo  " + profileLink.toString());
    }

    public void clickOnLogout() throws InterruptedException {
        Thread.sleep(1000);
        mouseHoverToElementAndClick(logout);
        log.info("Clicking on logout  " + logout.toString());
    }

    // This method will select top menu categroy
    public void selectMenu(String menu) {
        List<WebElement> topMenuNames = driver.findElements(By.xpath("//div[@id='block_top_menu']//li"));
        for (WebElement names : topMenuNames) {
            if (names.getText().equalsIgnoreCase(menu)) {
                names.click();
                break;
            }
        }
        log.info("Selecting page  " +menu);
    }
}
