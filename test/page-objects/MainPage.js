import { Label, Input, ElementsList } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";

class MainPage extends BasePage{
    constructor(){
        super(new Label(`//*[@class="featured-locations"]`, 'recent locations'), 'home page header')

        this.consentButton = new Label(`//*[@class="banner-button policy-accept"]`, 'consent buton')
        this.inputField = new Input(`//*[@class="search-input"]`, 'consent buton')
        this.bleh = new Label(`//*[@class="search-bar-result search-result source-radar"]`, 'consent buton')
        this.resultsList
        this.recentLocationsList
    }
    async consentClick(){
        await this.consentButton.click()
    }

    async enterData(city){
        await this.inputField.typeText(city)
    }
    async checkListOpen(){
        return this.bleh.state().waitForDisplayed()
    }

    async clickFirstResult(){
        // this.resultsList = new ElementsList(Label,`//*[@class="search-bar-result search-result source-radar"]`, 'consent buton')
        // this.resultsList = null
        await this.bleh.state().waitForDisplayed()
        this.resultsList = new ElementsList(Label,`//*[@class="search-bar-result search-result source-radar"]`, 'consent buton')
        let list = await this.resultsList.getListOfElements()
        await list[0].click()
    }

    async clickFirstRecentLocation(){
        this.recentLocationsList = new ElementsList(Label,`//*[contains(@class, "recent-location-item featured-location")]`, 'consent buton')
        // await this.bleh.state().waitForDisplayed()
        const list = await this.recentLocationsList.getListOfElements()
        await list[0].click()
    }
}

export default new MainPage()