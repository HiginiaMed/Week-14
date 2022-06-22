class InventoryPage {
    get img1() { return $('#item_4_img_link')};
    get img2() { return $('#item_0_img_link')};
    get img3() { return $('#item_1_img_link')};
    get img4() { return $('#item_5_img_link')};
    get img5() { return $('#item_2_img_link')};
    get img6() { return $('#item_3_img_link')};
    get title1() { return $('#item_4_title_link')};
    get title2() { return $('#item_0_title_link')};
    get title3() { return $('#item_1_title_link')};
    get title4() { return $('#item_5_title_link')};
    get title5() { return $('#item_2_title_link')};
    get title6() { return $('#item_3_title_link')};
    get titleDetails() { return $('.inventory_details_name')};
    get descriptionDetail() { return $('.inventory_details_desc')};
    get add1() { return $('#add-to-cart-sauce-labs-backpack')};
    get add2() { return $('#add-to-cart-sauce-labs-bike-light')};
    get add3() { return $('#add-to-cart-sauce-labs-bolt-t-shirt')};
    get add4() { return $('#add-to-cart-sauce-labs-fleece-jacket')};
    get add5() { return $('#add-to-cart-sauce-labs-onesie')};
    get add6() { return $('//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]')};
    get remove1() { return $('#remove-sauce-labs-backpack')};
    get remove2() { return $('#remove-sauce-labs-bike-light')};
    get remove3() { return $('#remove-sauce-labs-bolt-t-shirt')};
    get remove4() { return $('#remove-sauce-labs-fleece-jacket')};
    get remove5() { return $('#remove-sauce-labs-onesie')};
    get remove6() { return $('//*[@id="remove-test.allthethings()-t-shirt-(red)"]')};
    get textPrice1() { return $('div.inventory_item:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)')};
    get textPrice2() { return $('div.inventory_item:nth-child(2) > div:nth-child(2)')};
    get textPrice3() { return $('div.inventory_item:nth-child(3) > div:nth-child(2)')};
    get textPrice4() { return $('div.inventory_item:nth-child(4) > div:nth-child(2)')};
    get textPrice5() { return $('div.inventory_item:nth-child(5) > div:nth-child(2)')};
    get textPrice6() { return $('div.inventory_item:nth-child(6) > div:nth-child(2)')};
    get backBtn() { return $('#back-to-products')}

    async addTocart ()  {
        await this.img1.click();
        await expect(this.titleDetails).toHaveText('Sauce Labs Backpack');
        await expect(this.descriptionDetail).toHaveText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        await this.add1.click();
        await this.remove1.click();
        await this.backBtn.click();
        await this.add2.click();
        await this.add3.click();
    }
    async addRemove () {
        await expect(this.add1).toBeDisplayed();
        await expect(this.add1).toBeClickable();
        await expect(this.add2).toBeDisplayed();
        await expect(this.add2).toBeClickable();
        await expect(this.add3).toBeDisplayed();
        await expect(this.add3).toBeClickable();
        await expect(this.add4).toBeDisplayed();
        await expect(this.add4).toBeClickable();
        await expect(this.add5).toBeDisplayed();
        await expect(this.add5).toBeClickable();
        await expect(this.add6).toBeDisplayed();
        await expect(this.add6).toBeClickable();
        await this.add1.click();
        await this.add2.click();
        await this.add3.click();
        await this.add4.click();
        await this.add5.click();
        await this.add6.click();
        await expect(this.remove1).toBeDisplayed();
        await expect(this.remove1).toBeClickable();
        await expect(this.remove2).toBeDisplayed();
        await expect(this.remove2).toBeClickable();
        await expect(this.remove3).toBeDisplayed();
        await expect(this.remove3).toBeClickable();
        await expect(this.remove4).toBeDisplayed();
        await expect(this.remove4).toBeClickable();
        await expect(this.remove5).toBeDisplayed();
        await expect(this.remove5).toBeClickable();
        await expect(this.remove6).toBeDisplayed();
        await expect(this.remove6).toBeClickable();
        await this.remove1.click();
        await this.remove2.click();
        await this.remove3.click();
        await this.remove4.click();
        await this.remove5.click();
        await this.remove6.click();
    }
}

module.exports = new InventoryPage

