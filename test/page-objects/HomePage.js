import Browser from "../../framework/browser/Browser.js";
import { Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";

class HomePage extends BasePage{
    constructor(){
        super(new Label('//*[@id="title"]', 'home page header'), 'home page')

        this.clientLink = new Label(`//*[@href="/sampleapp"]`, 'sample app link')
    }

    async clickLink(){
        await this.clientLink.click()
    }
}

export default new HomePage()