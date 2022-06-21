const LoginPageItems = require('../pageobjects/login.page')

describe ('Login items testing', ()=> {
    beforeAll('open browser', ()=> {
        browser.url('https://www.saucedemo.com/')
    })
    it('Show logo', async () => {
        await expect(LoginPageItems.logo).toBeDisplayed();
    })
    it('Image Bot', async () => {
        await expect(LoginPageItems.imgRobot).toBeDisplayed();
    })
    it('List of usernames', async () => {
        await expect(LoginPageItems.usernames).toBeDisplayed();
        await expect(LoginPageItems.usernames).toHaveTextContaining('Accepted usernames are:');
    })
    it('Password for all users', async () => {
        await expect(LoginPageItems.pass).toBeDisplayed();
        await expect(LoginPageItems.pass).toHaveTextContaining('Password for all users:');
    })
})