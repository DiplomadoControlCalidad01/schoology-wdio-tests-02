
const { ResourcePage } = require('./../resource.po');
const { ResourceGroupModalCreateGroupPage } = require('./modals/create-group.po');
const { ResourceGroupModalConfirmationPage } = require('./modals/confirmation.po')

class ResourceGroupPage extends ResourcePage {
  get newGroupLink() { return this.locator('//a[@href="/groups/new"]'); }

  get groupListTable() { return this.locator('table#library-left-nav[role=presentation]')}
  get groupResourceBody() { return this.locator('div#library-main'); }
  get groupResourceTable() { return this.locator('table#collection-view-contents[role=presentation]'); }

  get optionsButton() { return this.locator('div#collection-toolbar div#toolbar-options'); }
  get optionEnableLearningObjectiveLink() { return this.locator('div#toolbar-options li#collection-enable-outcomes a[href]')}

  get createResourceButton() { return this.locator('div#collection-toolbar div#toolbar-add'); }

  constructor() {
    super();
    this.modalCreateGroup = new ResourceGroupModalCreateGroupPage();
    this.modalConfirmation = new ResourceGroupModalConfirmationPage();
  }

  open() {
    super.open();
    this.resourceGroupButton.click();
    this.waitForGroupTable();
  }

  openGroup(name) {
    this.waitForGroupTable()
    const table = this.getGroupTableList().value || [];
    const row = table.find(row => `${row.getText()}` === `${name}`);
    if (!row) throw new Error(`Suggested group not found on list: ${name}`);
    row.click();
    this.waitForResourceDetails();    
  }

  waitForResourceDetails() {
    return this.groupResourceBody.waitForExist(this.constants.waitForVisible);
  }

  waitForGroupTable() {
    return this.groupListTable.waitForExist(this.constants.waitForVisible);
  }

  waitForResourceTable() {
    return this.groupResourceTable.waitForExist(this.constants.waitForVisible);
  }

  createNewGroup(data) {
    this.newGroupLink.click();
    this.modalCreateGroup.saveGroup(data);
    this.waitForGroupTable();
  }

  getGroupTableList() {
    return this.groupListTable.elements('tbody tr[id]');
  }

  getGroupTableNames() {
    const names = this.groupListTable.elements('tbody tr[id] td a[role]').getText();
    if (!Array.isArray(names)) names = [names];
    return names;
  }

  getGroupByName(groupName) {
    return this.getGroupTableNames().find(name => name === groupName);
  }

  enableLearningObjectives() {
    this.optionsButton.click();
    this.optionEnableLearningObjectiveLink.click();
    this.modalConfirmation.acceptConfirmation();
    this.waitForResourceDetails();
    this.waitForResourceTable();
  }

  getResourceTableList() {
    return this.groupResourceTable.elements('tbody tr[id]');
  }

  getResourceTableNames() {
    const names = this.groupResourceTable.elements('tbody tr[id] td a[href]').getText();
    if (!Array.isArray(names)) names = [names];
    return names
  }

  getResourceTableOutcomeName() {
    return this.groupResourceTable.elements('tbody tr[id=f-outcomes] td a[href]').getText();
  }

  openResource(name) {
    this.waitForResourceTable()
    const table = this.getResourceTableList().value || [];
    const row = table.find(row => `${row.getText()}` === `${name}`);
    if (!row) throw new Error(`Suggested resource not found on list: ${name}`);
    row.click();
    this.waitForResourceDetails();    
  }
}

module.exports = { ResourceGroupPage };
