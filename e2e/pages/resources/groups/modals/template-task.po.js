
const { Page } = require('./../../../page.po');

class ResourceGroupModalTemplateTaskPage extends Page {
  get templateTaskModal() { return this.locator('div[role=dialog]'); }

  get closeLink() { return this.locator('div[role=dialog] div.popups-close a[href]'); }
  get taskBlockBody() { return this.locator('div[role=dialog] div.template-title'); }

  constructor() {
    super();
  }

  waitForDialog() {
    return this.templateTaskModal.waitForExist(this.constants.waitForVisible);
  }

  waitToVanish() {
    $('div#popups-overlay').waitForVisible(this.constants.waitForVisible, true);
  }

  readTaskName() {
    this.waitForDialog();
    const taskName = this.taskBlockBody.getText();
    this.closeLink.click();
    this.waitToVanish();
    return taskName;
  }

}

module.exports = { ResourceGroupModalTemplateTaskPage };
