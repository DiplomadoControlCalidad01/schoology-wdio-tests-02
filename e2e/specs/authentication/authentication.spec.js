const { expect } = require('chai');
const LoginPage = require('../../pages/login.po')
const env = require('./../../environment');

xdescribe('Schoology login page', () => {
    it('should have the right title on login page', () => {
        LoginPage.open();
        expect(LoginPage.title).to.contain('Login to Schoology');
    });

    it('should fail at login', () => {
        LoginPage.loginWithEmail(env.failedLoginCredentials)
        expect(LoginPage.loginMessage).to.contain('The email address and password combination you entered cannot be recognized');
    });

    it('should login successfully', () => {
        LoginPage.loginWithEmail(env.loginCredentials)
        expect(LoginPage.title).to.contain('Home | Schoology');
    });
});