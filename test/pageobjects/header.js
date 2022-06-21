class Header {
    get burguerMenu() { return $('#react-burger-menu-btn')};
    get cartMenu() { return $('.shopping_cart_link')};
    get sortContainer() {return $('.product_sort_container')};
}

module.exports = new Header