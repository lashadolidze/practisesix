import { mainConfig, downloadDir } from "../framework/configs/main.wdio.conf.js";
// import { downloadDir } from "../framework/utils/hooks.js";

export const config = {
    ...mainConfig,
    ...{
        framework: 'cucumber',
        cucumberOpts: {
            require: ['./test/step-definitions/**/*.js',
                './framework/utils/hooks.js'
            ],
        },
        specs: [
            '../test/features/**/*.feature'
        ],
        capabilities: [
            {
                browserName: "chrome",
                "goog:chromeOptions": {
                    prefs: {
                        "download.default_directory": downloadDir
                    }
                },
            },
        ],
    },
};
