const { expect } = require('chai');
const { LoginPage } = require('../../pages/login.po')
const { credentials } = require('./../../../environment');

describe('Schoology login page', () => {
  const login = new LoginPage();

  it('Should fail at login with incorrect credentials', () => {
    login.loginWithEmail(credentials.invalid)
    expect(login.loginMessage).to.contain('The email address and password combination you entered cannot be recognized');
  });

  it('Should login successfully with proper credentials', () => {
    login.loginWithEmail(credentials.valid)
    expect(login.title).to.contain('Home | Schoology');
  });
});
