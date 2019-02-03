
const { Page } = require('./../../../page.po');

class ResourceGroupModalCreateGroupPage extends Page {
  get createGroupForm() { return this.locator('div[role=dialog] form#s-group-create-new-form'); }

  get nameTextField() { return this.locator('input#edit-name[type=text]'); }
  get descriptionTextArea() { return this.locator('textarea#edit-description[name=description]'); }
  get privacySelectField() { return this.locator('select#edit-privacy-level[name=privacy_level]'); }
  get accessSelectField() { return this.locator('select#edit-invite-type[name=invite_type]'); }

  get saveGroupButton() { return this.locator('input#edit-submit[type=submit][value=Crear]'); }

  constructor() {
    super();
    this
      .toForm('name', (value) => this.nameTextField.setValue(value))
      .toForm('description', (value) => this.descriptionTextArea.setValue(value))
      .toForm('privacy', (value) => this.privacySelectField.selectByValue(value))
      .toForm('access', (value) => this.accessSelectField.selectByValue(value));
  }

  waitForDialog() {
    return this.createGroupForm.waitForExist(this.constants.waitForVisible);
  }

  saveGroup(data) {
    this.waitForDialog();
    this.fillForm(data);
    this.saveGroupButton.click();
  }
}

module.exports = { ResourceGroupModalCreateGroupPage };
