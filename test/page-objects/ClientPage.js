import { Button, Input, Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";

class ClientPage extends BasePage{
    constructor(){
        super(new Label('//*[@id="loginstatus"]', 'client page header'), 'client page')

        this.loginField = new Input(`//*[@name="UserName"]`, 'login input field')
        this.passwordField = new Input(`//*[@name="Password"]`, 'password input field')
        this.loginButton = new Button(`//*[@id="login"]`, 'login button')
        this.statusText = new Label(`//*[@id="loginstatus"]`, 'status text')
    }

    async inputLogin(name){
        await this.loginField.typeText(name);
    };
    async inputPassword(pass){
        await this.passwordField.typeSecret(pass);
    };

    async clickLogin(){
        await this.loginButton.click();
    };

    async getStatus(){
        return this.statusText.getText();
    };
}

export default new ClientPage()