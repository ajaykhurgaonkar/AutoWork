Feature: Create contacts 

Scenario Outline: create a new contact 

	Given user should be present on login page 
	When title of login page is Freecrm 
	Then user enters the "<username>" and "<password>" 
	Then user enters the home page 
	Then user moves to new contacts 
	Then user enters "<firstname>" and "<lastname>" and "<position>" 
	Then close the browser 
	
	
	Examples: 
	
		|username|password|firstname|lastname|position|
		|ajaykhurgaonkar@gmail.com|@Chennaimedukhi1|Ajay|k|Owner|
