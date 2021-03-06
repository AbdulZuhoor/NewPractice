package stepDefinitions;

import org.testng.Assert;

import core.Base;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.LoginPageObject;

public class LoginPageStepDefinitions extends Base{
	
	LoginPageObject loginPage;
	
	
	@Given("^User is on TekSchool page$")
	public void user_is_on_TekSchool_page() throws Throwable {
		Base.initializeDriver();
		loginPage = new LoginPageObject();
		String expectedTitle = "TEK School – Knowledge is power";
		Assert.assertEquals(loginPage.pageTitle(), expectedTitle);
	}

	@When("^User Click on Test Environment link$")
	public void user_Click_on_Test_Environment_link() throws Throwable {
		loginPage = new LoginPageObject();
		loginPage.clickOnTestEnvironmentLink();
	}

	@Then("^User should see Test Environment page$")
	public void user_should_see_Test_Environment_page() throws Throwable {
		Assert.assertEquals(driver.getTitle(), "TEK SCHOOL");
	}
}
