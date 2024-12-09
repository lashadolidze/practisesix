
Feature: Sample app

Scenario: Sample app test case
    Given Main page is open
    When I click on Sample app
    Then Sample app page is open
    When I enter 'USER_NAME' as user name
    And I enter 'PASSWORD' as password
    And I click on log in button
    Then Welcome message with the name 'USER_NAME' should be displayed