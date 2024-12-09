import { Given, Then, When } from "@wdio/cucumber-framework";
import { assert } from "chai";
import ClientPage from "../page-objects/ClientPage.js";
import AllureReporter from "@wdio/allure-reporter";


Then('Sample app page is open', async()=>{
    AllureReporter.addStep('navigate to the sample app page')
    assert.isTrue(await ClientPage.isPageOpened(), 'Sample app page did not open')
})

When(/^I enter '(.*)' as user name$/, async(name)=>{
    AllureReporter.addStep('input login data')
    await ClientPage.inputLogin(process.env[name])
})

When(/^I enter '(.*)' as password$/, async(password)=>{
    AllureReporter.addStep('input password')
    await ClientPage.inputPassword(process.env[password])
})

When('I click on log in button', async()=>{
    AllureReporter.addStep('click on the login button')
    await ClientPage.clickLogin()
})

Then(/^Welcome message with the name '(.*)' should be displayed$/, async(name)=>{
    AllureReporter.addStep('welcome message with the correct data is displayed')
    assert.strictEqual(await ClientPage.getStatus(), `Welcome, ${process.env[name]}!`, 'correct welcome message was not displayed')
})