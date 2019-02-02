
const { Page } = require('./page.po');

class LoginPage extends Page {

  get emailTextField() { return this.locator('#edit-mail'); }
  get passwordTextField() { return this.locator('#edit-pass'); }

  get loginSubmitButton() { return this.locator('form input[type="submit"]'); }
  get loginMessage() { return this.locator('div .message-text').getText(); }

  constructor() {
    super();
    this
      .toForm('email', (value) => this.emailTextField.setValue(value))
      .toForm('password', (value) => this.passwordTextField.setValue(value));
  }

  loginWithEmail(logingCredentials) {
    this.open();
    this.fillForm(logingCredentials)
    this.loginSubmitButton.click();
  }

  logout() {
    this.open();
  }
}

module.exports = { LoginPage };
