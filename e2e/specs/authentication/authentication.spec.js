const { expect } = require('chai');
const LoginPage = require('../../pages/login.po')

describe('Schoology login page', () => {
    it('should have the right title on login page', () => {
        LoginPage.open('/');
        expect(LoginPage.title).to.contain('Login to Schoology');
    });

    it('should fail at login', () => {
        LoginPage.loginWithEmail()
        expect(LoginPage.loginMessage.getText()).to.contain('The email address and password combination you entered cannot be recognized');
    });

    xit('should login successfully', () => {
        LoginPage.open('/');
        LoginPage.username.setValue('jafeth.garcia.j@gmail.com');
        LoginPage.password.setValue('');
        LoginPage.submit();
        expect(LoginPage.title).to.contain('Home | Schoology');
    });
});