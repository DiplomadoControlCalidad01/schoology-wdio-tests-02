
const { Page } = require('./page.po');

class LoginPage extends Page {

  get emailTextField() { return this.locator('#edit-mail'); }
  get passwordTextField() { return this.locator('#edit-pass'); }

  get loginSubmitButton() { return this.locator('form input[type="submit"]'); }
  get loginMessage() { return this.locator('div .message-text').getText(); }

  get profileButton() { return this.locator('div[data-sgy-sitenav=header-my-account-menu] button');}
  get logoutButton() { return this.locator('a[href*="/logout"]');}

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
    this.profileButton.click();
    this.logoutButton.click();
  }
}

module.exports = { LoginPage };
