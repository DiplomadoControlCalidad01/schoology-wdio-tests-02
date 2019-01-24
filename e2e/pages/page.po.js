const { url } = require('./../environment');
const selector = require('./../core/selector.helper');
const fillForm = require('./../core/fill-form.helper');

class Page {
    constructor() {
        this.locator = selector;
        this.fillForm = fillForm(this);
    }

    get title() { return browser.getTitle() }

    open(path) {
        browser.url(`${url}/${path}`);
    }
}

module.exports = { Page };