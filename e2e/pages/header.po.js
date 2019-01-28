const { selector, constants } = require('./../core/selector.helper');

class Header {
    
    get resourcesLink() { return selector('//div//a[text()="Recursos"][@href="/resources"]') }
    get coursesLink() { return selector('//HEADER/NAV/UL/LI[2]/DIV/BUTTON') }
    
    waitForHeader() {
        return $('//div//header').waitForVisible(constants.waitForVisible);
    }
}

module.exports = { Header };
