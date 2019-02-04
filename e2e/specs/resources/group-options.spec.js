const { expect } = require('chai');
const { LoginPage, ResourceGroupPage } = require('./../../pages');

describe('Schoology Resources Options on Groups', () => {
  const login = new LoginPage();
  const resourceGroup = new ResourceGroupPage();
  const data = resourceGroup.dataToRandom(resourceGroup.env.resourceGroupData);

  before(() => {
    login.loginWithEmail(login.env.credentials.valid);
  })

  beforeEach(() => {
    resourceGroup.open();
    resourceGroup.createNewGroup(data);
  });

  it('Should enable Learning Objectives on a Group', () => {
    const learningObjectivesName = 'Objetivos de aprendizaje';
    resourceGroup.openGroup(data.name);
    resourceGroup.enableLearningObjectives();

    expect(resourceGroup.getResourceTableList().isExisting()).to.be.true;
    expect(resourceGroup.getResourceTableOutcomeName()).to.contain(learningObjectivesName);

    resourceGroup.openResource(learningObjectivesName);

    expect(resourceGroup.groupResourceBody.getText()).to.contain(learningObjectivesName);
  });
});