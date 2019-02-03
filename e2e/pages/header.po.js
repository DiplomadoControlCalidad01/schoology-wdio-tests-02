const { selector, constants } = require('./../core/selector.helper');

class Header {

  get resourcesLink() { return selector('//div//a[text()="Recursos"][@href="/resources"]') }

  waitForHeader() {
    return $('//div//header').waitForVisible(constants.waitForVisible);
  }
}

module.exports = { Header };
