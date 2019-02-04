const { expect } = require('chai');
const { LoginPage, ResourceGroupPage } = require('./../../pages');

describe('Schoology Groups on Resources', () => {
  const login = new LoginPage();
  const resourceGroup = new ResourceGroupPage();

  before(() => {
    login.loginWithEmail(login.env.credentials.valid);
  });

  beforeEach(() => {
    resourceGroup.open();
  });

  it('Should create a group from Resources page', () => {
    const data = resourceGroup.dataToRandom(resourceGroup.env.resourceGroupData);
    resourceGroup.createNewGroup(data);
    
    expect(resourceGroup.getGroupTableList().isExisting()).to.be.true;
    expect(resourceGroup.getGroupTableNames()).to.contain.members([data.name]);
    expect(resourceGroup.getGroupByName(data.name)).to.be.equal(data.name);
  });
});