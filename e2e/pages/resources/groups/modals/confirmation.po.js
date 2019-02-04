
const { Page } = require('./../../../page.po');

class ResourceGroupModalConfirmationPage extends Page {
  get confirmationModal() { return this.locator('div[role=dialog]'); }

  get confirmButton() { return this.locator('div[role=dialog] input#confirmation_confirm'); }
  get cancelButton() { return this.locator('div[role=dialog] input#confirmation_cancel'); }

  constructor() {
    super();
  }

  waitForDialog() {
    return this.confirmationModal.waitForExist(this.constants.waitForVisible);
  }

  waitToVanish() {
    $('div#popups-overlay').waitForVisible(this.constants.waitForVisible, true);
  }

  acceptConfirmation() {
    this.waitForDialog();
    this.confirmButton.click();
    this.waitToVanish();
  }

}

module.exports = { ResourceGroupModalConfirmationPage };
