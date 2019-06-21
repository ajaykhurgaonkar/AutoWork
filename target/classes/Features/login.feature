Feature: login page

#Scenario: Diligence Login page

#Given user should be present on login page
#When title of login page is Freecrm
#Then user enters the "ajaykhurgaonkar@gmail.com" and "@Chennaimedukhi1"
#And user enters the home page



Scenario Outline: Diligence Login page

Given user should be present on login page
When title of login page is Freecrm
Then user enters the "<username>" and "<password>"
And user enters the home page

Examples: 
 |username|password|
 |ajaykhurgaonkar@gmail.com|@Chennaimedukhi1|
 