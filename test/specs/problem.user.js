const LoginPage = require('../pageobjects/login.page')
const InventoryPage = require('../pageobjects/inventory.page')
const HeaderPage = require('../pageobjects/header')
const Asside = require('../pageobjects/asside')
const Footerpage = require('../pageobjects/footer')
const CartPage = require('../pageobjects/cart.page')
const CheckoutPage = require('../pageobjects/checkout.page')

describe ('Problem user test', ()=> {

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
        await LoginPage.login('problem_user', 'secret_sauce');
    })
    describe ('Inventory page test', ()=> {
        it('I just can buy 3 products. Can not remove', async () => {
            await expect(InventoryPage.add1).toBeDisplayed();
            await expect(InventoryPage.add1).toBeClickable();
            await expect(InventoryPage.add2).toBeDisplayed();
            await expect(InventoryPage.add2).toBeClickable();
            await expect(InventoryPage.add3).toBeDisplayed();
            await expect(InventoryPage.add3).toBeClickable();
            await expect(InventoryPage.add4).toBeDisplayed();
            await expect(InventoryPage.add4).toBeClickable();
            await expect(InventoryPage.add5).toBeDisplayed();
            await expect(InventoryPage.add5).toBeClickable();
            await expect(InventoryPage.add6).toBeDisplayed();
            await expect(InventoryPage.add6).toBeClickable();
            await InventoryPage.add1.click();
            await InventoryPage.add2.click();
            await InventoryPage.add5.click();
            await expect(InventoryPage.remove1).toBeDisplayed();
            await expect(InventoryPage.remove1).toBeClickable();
            await expect(InventoryPage.remove2).toBeDisplayed();
            await expect(InventoryPage.remove2).toBeClickable();
            await expect(InventoryPage.remove5).toBeDisplayed();
            await expect(InventoryPage.remove5).toBeClickable();
        })
        it('Add to cart success', async () => {
            await InventoryPage.img1.click();
            await InventoryPage.backBtn.click();
        })
        it('Incorrect image display on inventory', async () => {
            const image1 = await $('#item_4_img_link > img').getAttribute('src');
            await expect(image1).not.toBe('/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
            await expect(image1).toBe('/static/media/sl-404.168b1cce.jpg');
            const image2 = await $('#item_0_img_link > img:nth-child(1)').getAttribute('src');
            await expect(image2).not.toBe('/static/media/bike-light-1200x1500.a0c9caae.jpg');
            await expect(image1).toBe('/static/media/sl-404.168b1cce.jpg');
            const image3 = await $('#item_1_img_link > img:nth-child(1)').getAttribute('src');
            await expect(image3).not.toBe('/static/media/bolt-shirt-1200x1500.c0dae290.jpg');
            await expect(image1).toBe('/static/media/sl-404.168b1cce.jpg');
            const image4 = await $('#item_5_img_link > img:nth-child(1)').getAttribute('src');
            await expect(image4).not.toBe('/static/media/sauce-pullover-1200x1500.439fc934.jpg');
            await expect(image1).toBe('/static/media/sl-404.168b1cce.jpg');
            const image5 = await $('#item_2_img_link > img:nth-child(1)').getAttribute('src');
            await expect(image5).not.toBe('/static/media/red-onesie-1200x1500.1b15e1fa.jpg');
            await expect(image1).toBe('/static/media/sl-404.168b1cce.jpg');
            const image6 = await $('#item_3_img_link > img:nth-child(1)').getAttribute('src');
            await expect(image6).not.toBe('/static/media/red-tatt-1200x1500.e32b4ef9.jpg');
            await expect(image1).toBe('/static/media/sl-404.168b1cce.jpg');
        });
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
        it('Asside elements, button about have an error', async () => {
            await HeaderPage.burguerMenu.click();
            await expect(Asside.allItems).toBeClickable();
            await expect(Asside.allItems).toBeFocused();
            await expect(Asside.about).toBeClickable();
            await expect(Asside.about).toHaveHref('https://saucelabs.com/error/404');
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
        it('See what you have put in the cart, can remove here', async () => {
            await HeaderPage.cartMenu.click();
            await expect(CartPage.continueBtn).toBeDisplayed();
            await expect(CartPage.continueBtn).toBeClickable();
            await expect(CartPage.checkoutBtn).toBeDisplayed();
            await expect(CartPage.checkoutBtn).toBeClickable();
            await InventoryPage.remove5.click();
        })
    })
    describe ('Checkout step one, login failed test', ()=> {
        it('Empty first name', async () => {
            await CartPage.checkoutBtn.click();
            await CheckoutPage.checkout('', '', '2000');
            await expect(CheckoutPage.errorCont).toHaveText('Error: First Name is required');
            await expect(CheckoutPage.errorX1).toBeDisplayed();
            await expect(CheckoutPage.errorX2).toBeDisplayed();
            await expect(CheckoutPage.errorX3).toBeDisplayed();
            await expect(CheckoutPage.crossBtn).toBeDisplayed();
            await CheckoutPage.crossBtn.click();
        })
        it('Empty last name, can not complete this data', async () => {
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
            await CheckoutPage.checkout('Higinia', '', '');
            await expect(CheckoutPage.errorCont).not.toHaveText('Error: Postal Code is required');
            await expect(CheckoutPage.errorX1).toBeDisplayed();
            await expect(CheckoutPage.errorX2).toBeDisplayed();
            await expect(CheckoutPage.errorX3).toBeDisplayed();
            await expect(CheckoutPage.crossBtn).toBeDisplayed();
            await CheckoutPage.crossBtn.click();
        })
    })
 })
