const LoginPage = require('../pageobjects/login.page')
const InventoryPage = require('../pageobjects/inventory.page')
const HeaderPage = require('../pageobjects/header')
const Asside = require('../pageobjects/asside')
const Footerpage = require('../pageobjects/footer')
const CartPage = require('../pageobjects/cart.page')
const CheckoutPage = require('../pageobjects/checkout.page')

describe ('Standard user test', ()=> {

    beforeAll('open browser', ()=> {
        browser.url('https://www.saucedemo.com/')
    })
    it('Login page testing - Username input appear', async () => {
        await expect(LoginPage.inputUserName).toBeDisplayed();
        await expect(LoginPage.inputUserName).toBeEnabled();
    })
    it('Login page testing - Password input appear', async () => {
        await expect(LoginPage.inputPassword).toBeDisplayed();
        await expect(LoginPage.inputPassword).toBeEnabled();
    })
    it('Login success', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
    })
    describe ('Inventory page test', ()=> {
        it('Check add/remove carts', async () => {
            await InventoryPage.addRemove();
        })
        it('Add to cart success', async () => {
            await InventoryPage.addTocart();
        })
        it('Check items links', async () => {
            await expect(InventoryPage.img1).toBeDisplayed();
            await expect(InventoryPage.img1).toBeClickable();
            await expect(InventoryPage.img1).toHaveHref('#');
            await expect(InventoryPage.img2).toBeDisplayed();
            await expect(InventoryPage.img2).toBeClickable();
            await expect(InventoryPage.img2).toHaveHref('#');
            await expect(InventoryPage.img3).toBeDisplayed();
            await expect(InventoryPage.img3).toBeClickable();
            await expect(InventoryPage.img3).toHaveHref('#');
            await expect(InventoryPage.img4).toBeDisplayed();
            await expect(InventoryPage.img4).toBeClickable();
            await expect(InventoryPage.img4).toHaveHref('#');
            await expect(InventoryPage.img5).toBeDisplayed();
            await expect(InventoryPage.img5).toBeClickable();
            await expect(InventoryPage.img5).toHaveHref('#');
            await expect(InventoryPage.img6).toBeDisplayed();
            await expect(InventoryPage.img6).toBeClickable();
            await expect(InventoryPage.img6).toHaveHref('#');
            await expect(InventoryPage.title1).toBeDisplayed();
            await expect(InventoryPage.title1).toBeClickable();
            await expect(InventoryPage.title1).toHaveHref('#');
            await expect(InventoryPage.title2).toBeDisplayed();
            await expect(InventoryPage.title2).toBeClickable();
            await expect(InventoryPage.title2).toHaveHref('#');
            await expect(InventoryPage.title3).toBeDisplayed();
            await expect(InventoryPage.title3).toBeClickable();
            await expect(InventoryPage.title3).toHaveHref('#');
            await expect(InventoryPage.title4).toBeDisplayed();
            await expect(InventoryPage.title4).toBeClickable();
            await expect(InventoryPage.title4).toHaveHref('#');
            await expect(InventoryPage.title5).toBeDisplayed();
            await expect(InventoryPage.title5).toBeClickable();
            await expect(InventoryPage.title5).toHaveHref('#');
            await expect(InventoryPage.title6).toBeDisplayed();
            await expect(InventoryPage.title6).toBeClickable();
            await expect(InventoryPage.title6).toHaveHref('#');
            await expect(InventoryPage.textPrice1).toBeDisplayed();
            await expect(InventoryPage.textPrice1).toHaveTextContaining('$');
            await expect(InventoryPage.textPrice2).toBeDisplayed();
            await expect(InventoryPage.textPrice2).toHaveTextContaining('$');
            await expect(InventoryPage.textPrice3).toBeDisplayed();
            await expect(InventoryPage.textPrice3).toHaveTextContaining('$');
            await expect(InventoryPage.textPrice4).toBeDisplayed();
            await expect(InventoryPage.textPrice4).toHaveTextContaining('$');
            await expect(InventoryPage.textPrice5).toBeDisplayed();
            await expect(InventoryPage.textPrice5).toHaveTextContaining('$');
            await expect(InventoryPage.textPrice6).toBeDisplayed();
            await expect(InventoryPage.textPrice6).toHaveTextContaining('$');
        })
    })
    describe ('Header test', ()=> {
        it('Buttons clickables', async () => {
            await expect(HeaderPage.burguerMenu).toBeClickable();
            await expect(HeaderPage.burguerMenu).toBeDisplayed();
            await expect(HeaderPage.cartMenu).toBeClickable();
            await expect(HeaderPage.cartMenu).toBeDisplayed();
            await expect(HeaderPage.sortContainer).toBeClickable();
            await expect(HeaderPage.sortContainer).toBeDisplayed();
        })
    })
    describe ('Asside test', ()=> {
        it('Asside elements works', async () => {
            await HeaderPage.burguerMenu.click();
            await expect(Asside.allItems).toBeClickable();
            await expect(Asside.allItems).toBeFocused();
            await expect(Asside.about).toBeClickable();
            await expect(Asside.about).toHaveHref('https://saucelabs.com/');
            await expect(Asside.logout).toBeClickable();
            await expect(Asside.reset).toBeClickable();
            await Asside.crossBtn.click();
            await expect(HeaderPage.burguerMenu).toBeDisplayed();
        })
    })
    describe ('Footer test', ()=> {
        it('Social medias buttons', async () => {
            await expect(Footerpage.twitter).toBeClickable();
            await expect(Footerpage.twitter).toHaveHref('https://twitter.com/saucelabs');
            await expect(Footerpage.facebook).toBeClickable();
            await expect(Footerpage.facebook).toHaveHref('https://www.facebook.com/saucelabs');
            await expect(Footerpage.linkedin).toBeClickable();
            await expect(Footerpage.linkedin).toHaveHref('https://www.linkedin.com/company/sauce-labs/');
        })
    })
    describe ('Cart page test', ()=> {
        it('See what you have put in the cart', async () => {
            await HeaderPage.cartMenu.click();
            await expect(CartPage.continueBtn).toBeDisplayed();
            await expect(CartPage.continueBtn).toBeClickable();
            await expect(CartPage.checkoutBtn).toBeDisplayed();
            await expect(CartPage.checkoutBtn).toBeClickable();
            await expect(InventoryPage.remove2).toBeDisplayed();
            await expect(InventoryPage.remove2).toBeClickable();
            await expect(InventoryPage.remove3).toBeDisplayed();
            await expect(InventoryPage.remove3).toBeClickable();
            await InventoryPage.remove3.click();
        })
    })
    describe ('Checkout step one, login failed test', ()=> {
        it('Empty first name', async () => {
            await CartPage.checkoutBtn.click();
            await CheckoutPage.checkout('', 'Medica', '2000');
            await expect(CheckoutPage.errorCont).toHaveText('Error: First Name is required');
            await expect(CheckoutPage.errorX1).toBeDisplayed();
            await expect(CheckoutPage.errorX2).toBeDisplayed();
            await expect(CheckoutPage.errorX3).toBeDisplayed();
            await expect(CheckoutPage.crossBtn).toBeDisplayed();
            await CheckoutPage.crossBtn.click();
        })
        it('Empty last name', async () => {
            await browser.url('https://www.saucedemo.com/checkout-step-one.html');
            await CheckoutPage.checkout('Higinia', '', '2000');
            await expect(CheckoutPage.errorCont).toHaveText('Error: Last Name is required');
            await expect(CheckoutPage.errorX1).toBeDisplayed();
            await expect(CheckoutPage.errorX2).toBeDisplayed();
            await expect(CheckoutPage.errorX3).toBeDisplayed();
            await expect(CheckoutPage.crossBtn).toBeDisplayed();
            await CheckoutPage.crossBtn.click();
        })
        it('Empty postal code', async () => {
            await browser.url('https://www.saucedemo.com/checkout-step-one.html');
            await CheckoutPage.checkout('Higinia', 'Medica', '');
            await expect(CheckoutPage.errorCont).toHaveText('Error: Postal Code is required');
            await expect(CheckoutPage.errorX1).toBeDisplayed();
            await expect(CheckoutPage.errorX2).toBeDisplayed();
            await expect(CheckoutPage.errorX3).toBeDisplayed();
            await expect(CheckoutPage.crossBtn).toBeDisplayed();
            await CheckoutPage.crossBtn.click();
        })
    })
    describe ('Checkout step one, login success test', ()=> {
        it('Empty first name', async () => {
            await browser.url('https://www.saucedemo.com/checkout-step-one.html');
            await CheckoutPage.checkout('Higinia', 'Medica', '2000');
        })
    })
    describe ('Checkout step two', ()=> {
        it('Finish the buy', async () => {
            await expect(CheckoutPage.titleFinish).toHaveText('CHECKOUT: OVERVIEW');
            await expect(CheckoutPage.summary).toHaveTextContaining('$');
            await expect(CheckoutPage.finishBtn).toBeClickable();
            await expect(CheckoutPage.finishBtn).toBeDisplayed();
            await CheckoutPage.finishBtn.click();
        })
    })
    describe ('Checkout complete', ()=> {
        it('Test if the buy finish right', async () => {
            await expect(CheckoutPage.titleFinish).toHaveText('CHECKOUT: COMPLETE!');
            await expect(CheckoutPage.imgFinish).toBeDisplayed();
            await expect(CheckoutPage.backHomeBtn).toBeDisplayed();
            await CheckoutPage.backHomeBtn.click();
        })
    })
    describe ('Logout', ()=> {
        it('Test if the logout works', async () => {
            await HeaderPage.burguerMenu.click();
            await Asside.logout.click();
        })
    })
})