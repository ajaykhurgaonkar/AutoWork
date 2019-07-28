package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginstepDefinition {
	WebDriver driver;
	WebDriverWait wait;

	@Given("^user should be present on login page$")
	public void userLogin() {

		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\91917\\Downloads\\chromedriver_win32\\chromedriver.exe");

		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
		driver.get("https://freecrm.com");

	}

	@When("^title of login page is Freecrm$")
	public void titlecheck() {
		String title = driver.getTitle();
		Assert.assertEquals("Free CRM software for any Business", title);
	}

	@Then("^user enters the \"(.*)\" and \"(.*)\"$")
	public void enteruserpassword(String username, String password) {
		driver.findElement(By.xpath("/html/body/div[1]/header/div/nav/div[2]/div/div[2]/ul/a")).click();

		wait = new WebDriverWait(driver, 10);

		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id=\"ui\"]/div/div/form/div/div[3]")));

		driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div/form/div/div[1]/div/input")).sendKeys(username);
		driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div/form/div/div[2]/div/input")).sendKeys(password);

		driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div/form/div/div[3]")).click();

	}

	@Then("^user enters the home page$")
	public void homepage() {
		wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[contains(text(), \"Ajay K\")]")));
	}

	@Then("^user moves to new contacts$")
	public void movetoContacts() {

		Actions action = new Actions(driver);

		WebElement contacts = driver.findElement(By.xpath("//*[@id='main-nav']/a[3]/span"));

		action.moveToElement(contacts).click().build().perform();

		driver.findElement(By.xpath("//*[@id=\"dashboard-toolbar\"]/div[2]/div/a/button")).click();

	}

	@Then("^user enters \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void details(String firstname, String lastname, String position) {

		driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div[2]/div[2]/div/div[2]/form/div[1]/div[1]/div/div/input"))
				.sendKeys(firstname);
		driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div[2]/div[2]/div/div[2]/form/div[2]/div[1]/div/div/input"))
				.sendKeys(lastname);
		driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div[2]/div[2]/div/div[2]/form/div[1]/div[2]/div/div/input"))
				.sendKeys(position);

	}

	@Then("^close the browser$")
	public void close() {
		driver.close();
	}

}
