const LoginPage = require('../pageobjects/login.page')

describe ('Login page testing', ()=> {

    describe('Username input test', () => {
        it('Empty username error', async () => {
            await LoginPage.login('', 'secret_sauce');
            await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username is required');
        })
        it('Empty inputs', async () => {
            await LoginPage.login('', '');
            await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username is required');
        })
        it('Invalid username', async () => {
            await LoginPage.login('error', 'secret_sauce');
            await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
        })
        it('Locked username', async () => {
            await LoginPage.login('locked_out_user', 'secret_sauce');
            await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Sorry, this user has been locked out.');
        })
        it('Cross container', async () => {
            await expect(LoginPage.errorBtn).toBeDisplayed();
            await expect(LoginPage.errorBtn).toBeClickable();
        })
    })
    describe('Password input test', () => {
        it('Empty password error', async () => {
            await LoginPage.login('standard_user', '');
            await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Password is required');
        })
        it('Invalid password', async () => {
            await LoginPage.login('standard_user', 'error');
            await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
        })
    })
})