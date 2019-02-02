const { url } = require('./../../environment');
const { selector, constants } = require('./../core/selector.helper');
const { Header } = require('./header.po');

class Page {

  get title() { return browser.getTitle() }

  constructor() {
    this.locator = selector;
    this.header = new Header();
    this._formMap = new Map();
  }

  open(path) {
    browser.url(`${url}/${path}`);
  }

  waitForHeader() {
    return $('//div//header').waitForVisible(constants.waitForVisible);
  }

  toForm(key, functionCall) {
    this._formMap.set(key, functionCall);
    return this;
  }

  fillForm(data) {
    this._form.forEach((functionCall, key) => {
      if (data[key]) functionCall(data[key]);
    });
  }
}

module.exports = { Page };
