$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/LoginPage.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 19742444100,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#this is name of scenario"
    }
  ],
  "line": 5,
  "name": "Login test to TekSchool TestEnvironment page",
  "description": "",
  "id": "login;login-test-to-tekschool-testenvironment-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on TekSchool page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User Click on Test Environment link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should see Test Environment page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_is_on_TekSchool_page()"
});
formatter.result({
  "duration": 6152815400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_Click_on_Test_Environment_link()"
});
formatter.result({
  "duration": 2337842400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_should_see_Test_Environment_page()"
});
formatter.result({
  "duration": 9684200,
  "status": "passed"
});
formatter.after({
  "duration": 3734825700,
  "status": "passed"
});
});