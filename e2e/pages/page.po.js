const { url } = require('./../environment');
const { selector, constants } = require('./../core/selector.helper');
const fillForm = require('./../core/fill-form.helper');
const { Header } = require('./header.po');

class Page {
    constructor() {
        this.locator = selector;
        this.fillForm = fillForm(this);
        this.header = new Header();
    }

    get title() { return browser.getTitle() }

    open(path) {
        browser.url(`${url}/${path}`);
    }
    
    waitForHeader() {
        return $('//div//header').waitForVisible(constants.waitForVisible);
    }
}

module.exports = { Page };