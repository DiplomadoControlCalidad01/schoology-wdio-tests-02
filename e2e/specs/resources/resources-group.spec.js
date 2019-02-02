const { expect } = require('chai');
const { LoginPage } = require('../../pages/login.po')
const { ResourceGroupPage } = require('../../pages/resources/resource-group.po');
const env = require('../../../environment');

describe('Schoology Group Resources', () => {
  const login = new LoginPage();
  const resourceGroup = new ResourceGroupPage();

  beforeEach(() => {
    login.loginWithEmail(env.credentials.valid);
  });

  it('Should create a group from Resources page', () => {
    resourceGroup.open();
    resourceGroup.createNewGroup();
  });
});