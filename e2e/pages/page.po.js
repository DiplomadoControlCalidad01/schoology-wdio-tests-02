const { url } = require('./../environment');
const selector = require('./../core/selector-helper');

class Page {
    constructor() {
        this.$ = selector;
    }

    get title() { return browser.getTitle() }

    open(path) {
        browser.url(`${url}/${path}`);
    }
}

module.exports = { Page };