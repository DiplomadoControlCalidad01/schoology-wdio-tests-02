
const { Page } = require('./page.po');

class LoginPage extends Page {

    get username() { return this.$('#edit-mail'); }
    get password() { return this.$('#edit-pass'); }
    get submitBtn() { return this.$('form input[type="submit"]'); }
    get loginMessage() { return this.$('div .message-text').getText(); }

    loginWithEmail(email, password) {
        this.open();
        this.username.setValue(email);
        this.password.setValue(password);
        this.submitBtn.click();
    }
}

module.exports = new LoginPage();
