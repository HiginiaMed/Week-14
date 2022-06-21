class Checkout {
    get inputFN() { return $('#first-name')};
    get inputLN() { return $('#last-name')};
    get inputPC() { return $('#postal-code')};
    get errorCont() { return $('.error-message-container')};
    get crossBtn() { return $('.error-button')};
    get errorX1() { return $('div.form_group:nth-child(1) > svg:nth-child(2) > path:nth-child(1)')};
    get errorX2() { return $('div.form_group:nth-child(2) > svg:nth-child(2)')};
    get errorX3() { return $('div.form_group:nth-child(3) > svg:nth-child(2) > path:nth-child(1)')};
    get cancelBtn() { return $('#cancel')};
    get continueBtn() { return $('#continue')};
    get finishBtn() { return $('#finish')};
    get summary() { return $('.summary_total_label')}
    get titleFinish() { return $('.title')};
    get imgFinish() { return $('.pony_express')};
    get backHomeBtn() { return $('#back-to-products')};

    async setFirstName(firstname) {
        await this.inputFN.setValue(firstname);
    }
    async setLastName(lastname) {
        await this.inputLN.setValue(lastname);
    }
    async setPostalCode(postalcode) {
        await this.inputPC.setValue(postalcode);
    }
    async checkout(firstname, lastname, postalcode) {
        await this.setFirstName(firstname);
        await this.setLastName(lastname);
        await this.setPostalCode(postalcode);
        await expect(this.cancelBtn).toBeClickable();
        await expect(this.cancelBtn).toBeDisplayed();
        await expect(this.continueBtn).toBeDisplayed();
        await this.continueBtn.click();
    }
}

module.exports = new Checkout