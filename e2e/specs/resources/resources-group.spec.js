const { expect } = require('chai');
const loginPage = require('../../pages/login.po');
const resourcePage = require('../../pages/resources/resource-group.po');
const env = require('../../../environment');

describe('Schoology Group Resources', () => {
  beforeEach(() => {
    loginPage.loginWithEmail(env.credentials.valid);
  });

  it('#BVT Should create a group from Resources page', () => {
    resourcePage.open();
    resourcePage.createNewGroup();
  });
});