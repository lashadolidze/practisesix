import path from 'node:path';
import fs from 'fs-extra';
import AllureReporter from '@wdio/allure-reporter';

export const downloadDir = path.resolve('./tmp');

export const mainConfig = {
    runner: 'local',
    exclude: [
    ],
    maxInstances: 1,
    logLevel: 'warn',
    bail: 0,
    waitforTimeout: 0,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    baseUrl: 'http://uitestingplayground.com/',
    reporters: ['spec',
        ['allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: true,
                useCucumberStepReporter: true,
                disableMochaHooks: true,
            }
        ]],
}
