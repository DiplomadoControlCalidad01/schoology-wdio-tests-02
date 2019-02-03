const { selector, constants } = require('./../core/selector.helper');

class Header {

  get resourcesLink() { return selector('div#header a[href="/resources"]') }
  get coursesLink() { return selector('//HEADER/NAV/UL/LI[2]/DIV/BUTTON') }

  waitForHeader() {
    return $('div#header header').waitForVisible(constants.waitForVisible);
  }
}

module.exports = { Header };
