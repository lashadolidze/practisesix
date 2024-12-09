import {  After, AfterAll, AfterStep, Before, BeforeAll } from '@wdio/cucumber-framework';
import Browser from '../../framework/browser/Browser.js';
import { mainConfig } from '../../framework/configs/main.wdio.conf.js';
import AllureReporter from '@wdio/allure-reporter';
import path from 'node:path';
import fs from 'fs-extra';


export const downloadDir = path.resolve('./tmp');


BeforeAll(async function () {
    fs.ensureDir(downloadDir)
});

Before(async function () {
    await Browser.openUrl(mainConfig.baseUrl);
});

AfterStep(async function (meh) {
     if(meh.result.status == 'FAILED'){
        AllureReporter.addStep('ssssss')
        AllureReporter.addAttachment('screenshot on passed', Buffer.from(await browser.takeScreenshot(), 'base64'), 'image/png')
     }
    console.log("first",meh,);
});

AfterAll(async function () {
    fs.emptyDir(downloadDir)
});