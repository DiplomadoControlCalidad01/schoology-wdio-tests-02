
const { Page } = require('./page');

const env = require('./../environment');

class LoginPage extends Page {
    get username() { return $('#edit-mail'); }
    get password() { return $('#edit-pass'); }
    get submitBtn() { return $('form input[type="submit"]'); }
    get loginMessage() { return $('div .message-text'); }

    loginWithEmail() {
        this.open(env.url);
        this.username.setValue(env.loginCredentials.email);
        this.password.setValue(env.loginCredentials.password);
        this.submitBtn.click();
    }
}

module.exports = new LoginPage();
