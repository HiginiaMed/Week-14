# Sauce Labs
Automation tests will be carried out for the Sauce Demo page, it will consider the critical and most important cases for the business model.

## Document History
-Version 1.0
-21/06/2022
-Creation of documentation for automated tests
-WebDriverIO tests by Maria Higinia Medica.

## Browser
-Windows 8.1
-Firefox
-Desktop

## Bug reports

### Locked out user test

#### Login page
Testing result: failed
Steps to reproduce:
1. Open <a href="https://www.saucedemo.com/" target="_blank">Sauce Demo</a>
2. Log In with locked_out_user

Description: this user doesn't work

Expected: enter the page.
Received: error container: `Sorry, this user has been locked out.`

### Performance glitch user test

#### Login page, timeout excesive
Testing result: failed
Steps to reproduce:
1. Open <a href="https://www.saucedemo.com/" target="_blank">Sauce Demo</a>
2. Log In with performance_glitch_user

Description: Timeout - Async function did not complete within 3000ms

Received: Timeout 30000ms

#### Checkout complete, timeout excesive
Testing result: failed
Steps to reproduce:
1. Open <a href="https://www.saucedemo.com/" target="_blank">Sauce Demo</a>
2. Log In with performance_glitch_user
3. Add products
4. Checkout
5. Click on `BACK HOME`

Description: Timeout - Async function did not complete within 3000ms

Received: Timeout 30000ms

### Problem user test
#### Asside, button "ABOUT" error
Testing result: failed
Steps to reproduce:
1. Open <a href="https://www.saucedemo.com/" target="_blank">Sauce Demo</a>
2. Log In with problem_user
3. Asside element

Description: element `#about_sidebar_link` have an incorrect attribute href

Expected: "https://saucelabs.com/"
Received: "https://saucelabs.com/error/404"

#### Inventory, incorrect images displayed
Testing result: failed
Steps to reproduce:
1. Open <a href="https://www.saucedemo.com/" target="_blank">Sauce Demo</a>
2. Log In with problem_user
3. Inventory page

Description: all the images products elements with attribute `src` have a wrong image and with diferent size

Element `#item_4_img_link > img`
Expected: "/static/media/sauce-backpack-1200x1500.34e7aa42.jpg"
Received: "/static/media/sl-404.168b1cce.jpg"

Element `#item_0_img_link`
Expected: "/static/media/bike-light-1200x1500.a0c9caae.jpg"
Received: "/static/media/sl-404.168b1cce.jpg"

Element `#item_1_img_link`
Expected: "/static/media/bolt-shirt-1200x1500.c0dae290.jpg"
Received: "/static/media/sl-404.168b1cce.jpg"

Element `#item_5_img_link`
Expected: "/static/media/sauce-pullover-1200x1500.439fc934.jpg"
Received: "/static/media/sl-404.168b1cce.jpg"

Element `#item_2_img_link`
Expected: "/static/media/red-onesie-1200x1500.1b15e1fa.jpg"
Received: "/static/media/sl-404.168b1cce.jpg"

Element `#item_3_img_link`
Expected: "/static/media/red-tatt-1200x1500.e32b4ef9.jpg"
Received: "/static/media/sl-404.168b1cce.jpg"

#### Inventory, can't add/remove every products
Testing result: failed
Steps to reproduce:
1. Open <a href="https://www.saucedemo.com/" target="_blank">Sauce Demo</a>
2. Log In with problem_user
3. Inventory page

Description: couldn't click on three "ADD TO CART" buttons (I just can add just the products one, two and five).
             Although, I can't remove the only three products that I can add

Expected: element `add-to-cart-sauce-labs-bolt-t-shirt`) to be clickable
Received: not clickable

Expected: element `add-to-cart-sauce-labs-fleece-jacket`) to be clickable
Received: not clickable

Expected: element `add-to-cart-test.allthethings()-t-shirt-(red)`) to be clickable
Received: not clickable

Expected: element `#remove-sauce-labs-bolt-t-shirt`) to be displayed and clickable
Received: not displayed and not clickable

Expected: element `#remove-sauce-labs-fleece-jacket`) to be displayed and clickable
Received: not displayed and not clickable

Expected: element `//*[@id="remove-test.allthethings()-t-shirt-(red)"]`) to be displayed and clickable
Received: not displayed and not clickable

Expected: element `remove-sauce-labs-backpack`) to be clickable
Received: not clickable

Expected: element `remove-sauce-labs-bike-light`) to be clickable
Received: not clickable

Expected: element `remove-sauce-labs-onesie`) to be clickable
Received: not clickable

#### Inventory, timeout excesive
Testing result: failed
Steps to reproduce:
1. Open <a href="https://www.saucedemo.com/" target="_blank">Sauce Demo</a>
2. Log In with problem_user
3. Inventory page

Description: Timeout - Async function did not complete within 60000ms

#### Inventory item, wrong images/tittle/description
Testing result: failed
Steps to reproduce:
1. Open <a href="https://www.saucedemo.com/" target="_blank">Sauce Demo</a>
2. Log In with problem_user
3. Inventory page
4. Click on an image or tittle product

Description: the inventory item of the products have diferent information, images and tittles

Expected: Tittle "Sauce Labs Backpack"
Received: Tittle "Sauce Labs Fleece Jacket"

Expected: Description "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."
Received: Description "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office."

Expected: Image `#item_4_img_link`
Received: Image `'#item_5_img_link`

#### Inventory item, wrong button add
Testing result: failed
Steps to reproduce:
1. Open <a href="https://www.saucedemo.com/" target="_blank">Sauce Demo</a>
2. Log In with problem_user
3. Inventory page
4. Click on an image or tittle product

Description: Can't call click on element with selector `#add-to-cart-sauce-labs-backpack` because element wasn't found

Expected: click on button `#add-to-cart-sauce-labs-backpack`
Received: button `#add-to-cart-sauce-labs-fleece-jacket`

#### Checkout step one, can not complete CheckoutCheckout data
Testing result: failed
Steps to reproduce:
1. Open <a href="https://www.saucedemo.com/" target="_blank">Sauce Demo</a>
2. Log In with problem_user
3. Checkout page
4. Click on CHECKOUT button

Description: Can't complete the data on the input `Last Name` and then I can't continue the buy process because
it is a requirement to complete all the fields. This is a high severity and priority bug

Expected: put data on Input Last Name
Received: null