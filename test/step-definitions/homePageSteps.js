import { Given, When } from "@wdio/cucumber-framework";
import HomePage from "../page-objects/HomePage.js";
import { assert } from "chai";
import AllureReporter from "@wdio/allure-reporter";



Given('Main page is open', async()=>{
    AllureReporter.addStep('navigate to home page')
    assert.isTrue(await HomePage.isPageOpened(), 'Home page is not opened')
})


When('I click on Sample app', async()=>{
    AllureReporter.addStep('click on the sample app link')
    await HomePage.clickLink()
})