const { expect } = require('chai');
const LoginPage = require('../../pages/login.po')
const { credentials } = require('./../../../environment');

describe('Schoology login page', () => {
  it('Should fail at login with incorrect credentials', () => {
    LoginPage.loginWithEmail(credentials.invalid)
    expect(LoginPage.loginMessage).to.contain('The email address and password combination you entered cannot be recognized');
  });

  it('Should login successfully with proper credentials', () => {
    LoginPage.loginWithEmail(credentials.valid)
    expect(LoginPage.title).to.contain('Home | Schoology');
  });
});
