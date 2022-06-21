class Asside {
    get allItems() {return $('#inventory_sidebar_link')};
    get about() {return $('#about_sidebar_link')};
    get logout() {return $('#logout_sidebar_link')};
    get reset() {return $('#reset_sidebar_link')};
    get crossBtn() { return $('#react-burger-cross-btn')};

    async asside() {
        await this.allItems.click();
        await this.about.click();
        await this.logout.click();
        await this.reset.click();
        await this.crossBtn.click();
    }
}

module.exports = new Asside