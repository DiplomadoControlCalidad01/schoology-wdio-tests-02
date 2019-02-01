
const { Page } = require('../page.po');

class ResourcePage extends Page {

  get resourceGroupButton() { return this.locator('//div[@id="resources-left-menu-wrapper"]//a[@href="/resources/group"]'); }
  get resourcePublicButton() { return this.locator('//div[@id="resources-left-menu-wrapper"]//a[@href="/resources/find"]'); }

  open() {
    this.header.waitForHeader();
    this.header.resourcesLink.click();
  }
}

module.exports = { ResourcePage };
