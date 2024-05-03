class LoginScreen {
  get inputEmail() {
    return $('//android.widget.EditText[@resource-id="email"]');
  }
  get inputPassword() {
    return $('//android.widget.EditText[@resource-id="password"]');
  }
  get btnLogin() {
    return $('~Login');
  }
  get errorMessageText() {
    return $(
      '//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView'
    );
  }
  get btnClose() {
    return $('~Logout');
  }
  get clickYes() {
    return $('//android.view.ViewGroup[@content-desc="Yes"]');
  }
  get backLoginscreen() {
    return $('//android.widget.TextView[@text=""]')
}
  /**
   * Um método para encapsular código de automação para interagir com a página
   * e.g. para fazer login usando nome de usuário e senha
   */
  async login(email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.btnLogin.click();
  }
  
}module.exports = new LoginScreen();
