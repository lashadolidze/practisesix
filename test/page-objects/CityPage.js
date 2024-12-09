import Browser from "../../framework/browser/Browser.js";
import { Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";




class CityPage extends BasePage{
    constructor(){
        super(new Label(`//*[@class="today-forecast-card content-module"]`, 'recent locations'), 'home page header')

        this.title = new Label(`//*[@class="header-loc"]`)
    }

    async getTitle(){
        return this.title.getText()
    }
    async getToMainPage(){
        await Browser.Window.back()
    }
}

export default new CityPage()