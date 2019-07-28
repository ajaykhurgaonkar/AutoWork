$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/91917/eclipse-workspace/Cucumber/src/main/java/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Create contacts",
  "description": "",
  "id": "create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "create a new contact",
  "description": "",
  "id": "create-contacts;create-a-new-contact",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user should be present on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Freecrm",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user moves to new contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "create-contacts;create-a-new-contact;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 16,
      "id": "create-contacts;create-a-new-contact;;1"
    },
    {
      "cells": [
        "ajaykhurgaonkar@gmail.com",
        "@Chennaimedukhi1",
        "Ajay",
        "k",
        "Owner"
      ],
      "line": 17,
      "id": "create-contacts;create-a-new-contact;;2"
    },
    {
      "cells": [
        "ajaykhurgaonkar@gmail.com",
        "@Chennaimedukhi1",
        "Sachin",
        "T",
        "Analyst"
      ],
      "line": 18,
      "id": "create-contacts;create-a-new-contact;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "create a new contact",
  "description": "",
  "id": "create-contacts;create-a-new-contact;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user should be present on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Freecrm",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters the \"ajaykhurgaonkar@gmail.com\" and \"@Chennaimedukhi1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user moves to new contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters \"Ajay\" and \"k\" and \"Owner\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginstepDefinition.userLogin()"
});
formatter.result({
  "duration": 7536338400,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.titlecheck()"
});
formatter.result({
  "duration": 145566900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ajaykhurgaonkar@gmail.com",
      "offset": 17
    },
    {
      "val": "@Chennaimedukhi1",
      "offset": 49
    }
  ],
  "location": "LoginstepDefinition.enteruserpassword(String,String)"
});
formatter.result({
  "duration": 6049578900,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.homepage()"
});
formatter.result({
  "duration": 1340366600,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.movetoContacts()"
});
formatter.result({
  "duration": 1165642800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ajay",
      "offset": 13
    },
    {
      "val": "k",
      "offset": 24
    },
    {
      "val": "Owner",
      "offset": 32
    }
  ],
  "location": "LoginstepDefinition.details(String,String,String)"
});
formatter.result({
  "duration": 1164984100,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.close()"
});
formatter.result({
  "duration": 155147900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "create a new contact",
  "description": "",
  "id": "create-contacts;create-a-new-contact;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user should be present on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Freecrm",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters the \"ajaykhurgaonkar@gmail.com\" and \"@Chennaimedukhi1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user moves to new contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters \"Sachin\" and \"T\" and \"Analyst\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginstepDefinition.userLogin()"
});
formatter.result({
  "duration": 6253375200,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.titlecheck()"
});
formatter.result({
  "duration": 161561300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ajaykhurgaonkar@gmail.com",
      "offset": 17
    },
    {
      "val": "@Chennaimedukhi1",
      "offset": 49
    }
  ],
  "location": "LoginstepDefinition.enteruserpassword(String,String)"
});
formatter.result({
  "duration": 5743046600,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.homepage()"
});
formatter.result({
  "duration": 1688611800,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.movetoContacts()"
});
formatter.result({
  "duration": 533690800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sachin",
      "offset": 13
    },
    {
      "val": "T",
      "offset": 26
    },
    {
      "val": "Analyst",
      "offset": 34
    }
  ],
  "location": "LoginstepDefinition.details(String,String,String)"
});
formatter.result({
  "duration": 1957808000,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.close()"
});
formatter.result({
  "duration": 118210400,
  "status": "passed"
});
});