class LoginPage {
    get inputUserName() { return $('#user-name')};
    get inputPassword() { return $('#password')};
    get btnLogin() { return $('#login-button')};
    get errorContainer() { return $('.error-message-container.error')};
    get errorBtn() { return $('.error-button')};
    get logo() { return $('.login_logo')};
    get imgRobot() { return $('.bot_column')};
    get usernames() { return $('#login_credentials')};
    get pass() { return $('.login_password')};

    async setUserName(username) {
        await this.inputUserName.setValue(username);
    }
    async setPassword(password) {
        await this.inputPassword.setValue(password);
    }
    async login(username, password) {
        await browser.url ('https://www.saucedemo.com/')
        await this.setUserName(username);
        await this.setPassword(password);
        await this.btnLogin.click();
    }
}

module.exports = new LoginPage