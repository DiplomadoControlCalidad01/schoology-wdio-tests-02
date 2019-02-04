const { selector, constants } = require('./../core/selector.helper');

class Header {

  get resourcesLink() { return selector('div#header a[href="/resources"]') }

  waitForHeader() {
    return $('div#header header').waitForVisible(constants.waitForVisible);
  }
}

module.exports = { Header };
