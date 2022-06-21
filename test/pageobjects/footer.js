class Footer {
    get twitter() {return $('.social_twitter > a:nth-child(1)')};
    get facebook() {return $('.social_facebook > a:nth-child(1)')};
    get linkedin() {return $('.social_linkedin > a:nth-child(1)')};
}

module.exports = new Footer