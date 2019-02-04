
const { Page } = require('./../../../page.po');

class ResourceGroupModalCreateResourceTaskTemplatePage extends Page {
  get createResourceForm() { return this.locator('div[role=dialog] form#s-library-collection-template-form'); }

  get nameTextField() { return this.locator('input#edit-template-fields-title[type=text]'); }
  get descriptionFrame() { return $('iframe#edit-template-fields-body_ifr'); }
  get maxPointTextField() { return this.locator('input#edit-template-fields-max-points[type=text]'); }

  get saveResourceButton() { return this.locator('form#s-library-collection-template-form input#edit-submit[type=submit]'); }

  constructor() {
    super();
    this
      .toForm('name', (value) => this.nameTextField.setValue(value))
      .toForm('descriptionDep', (value) => this.descriptionFrame.setValue(value))
      .toForm('maxPoint', (value) => this.maxPointTextField.setValue(value))
  }

  waitForDialog() {
    return this.createResourceForm.waitForExist(this.constants.waitForVisible);
  }

  waitToVanish() {
    $('div#popups-overlay').waitForVisible(this.constants.waitForVisible, true);
  }

  saveResource(data) {
    this.waitForDialog();
    this.fillForm(data);
    this.saveResourceButton.click();
    this.waitToVanish();
  }
}

module.exports = { ResourceGroupModalCreateResourceTaskTemplatePage };
