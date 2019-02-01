const { url } = require('./../../environment');
const { selector, constants } = require('./../core/selector.helper');
const fillForm = require('./../core/fill-form.helper');
const { Header } = require('./header.po');

class Page {

  get title() { return browser.getTitle() }

  constructor() {
    this.locator = selector;
    this.fillForm = fillForm(this);
    this.header = new Header();
    this._form = new Map();
  }

  open(path) {
    browser.url(`${url}/${path}`);
  }

  waitForHeader() {
    return $('//div//header').waitForVisible(constants.waitForVisible);
  }

  toForm(locator, callback) {
    this._form.set(locator, callback);
    return this;
  }

  completeForm(data) {
    this._form.forEach((callback, locator) => {
      if (data[locator])
        callback(data[locator]);
    });
  }
}

module.exports = { Page };
