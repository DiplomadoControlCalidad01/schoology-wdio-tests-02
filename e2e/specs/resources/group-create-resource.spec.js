const { expect } = require('chai');
const { LoginPage, ResourceGroupPage } = require('./../../pages');

describe.skip('Schoology Resources Create new Resources on Group', () => {
  const login = new LoginPage();
  const resourceGroup = new ResourceGroupPage();
  const group = resourceGroup.dataToRandom(resourceGroup.env.resourceGroupData);
  const resource = resourceGroup.dataToRandom(resourceGroup.env.resourceGroupTaskTemplateData);

  before(() => {
    login.loginWithEmail(login.env.credentials.valid);
  })

  beforeEach(() => {
    resourceGroup.open();
    resourceGroup.createNewGroup(group);
  });

  it('#BVT Should create a new resource task template on a group', () => {
    resourceGroup.openGroup(group.name);
    resourceGroup.createResourceTaskTemplate(resourceData)
    
    expect(resourceGroup.getResourceTableList().isExisting()).to.be.true;
    expect(resourceGroup.getResourceTableLinkNames()).to.contain.members([resource.name]);
    
    resourceGroup.openResource(resource.name);
    const resourceName = resourceGroup.modalTemplateTask.readTaskName();

    expect(resourceName).to.contain(resource.name);
  });
});