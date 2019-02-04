const { url } = require('./../../environment');
const { selector, constants, env } = require('./../core/selector.helper');
const { Header } = require('./header.po');
const { dataToRandom } = require('./../core/data-to-random.helper');

class Page {

  get title() { return browser.getTitle() }

  constructor() {
    this.locator = selector;
    this.header = new Header();
    this._formMap = new Map();
    this.env = env;
    this.constants = constants;
  }

  open(path) {
    browser.url(`${url}/${path}`);
  }

  waitForHeader() {
    return this.header.waitForHeader();
  }

  toForm(key, functionCall) {
    this._formMap.set(key, functionCall);
    return this;
  }

  fillForm(data) {
    this._formMap.forEach((functionCall, key) => {
      if (data[key]) functionCall(data[key]);
    });
  }

  dataToRandom(data) {
    return dataToRandom(data);
  }
}

module.exports = { Page };
