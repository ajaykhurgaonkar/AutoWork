package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Users\\91917\\eclipse-workspace\\Cucumber\\src\\main\\java\\Features\\contacts.feature", glue = {
		"stepDefinition" }, format= {"pretty", "html:test-output", "json: json-output/test-output","junit:junit_xml/cucumber.xml"},
				
				dryRun = false,
				monochrome = true,
				strict = true

		
		
		)
public class TestRunner {

}
