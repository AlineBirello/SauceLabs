describe("Minha demonstração de login", () => {
  beforeEach(async () => {
    //Acesse o botão hamburguer/toggle pelo seu ID de acessibilidade
    await $("~open menu").click();
    //Acesse a opção do menu de login à esquerda pelo seu texto
    await $('//*[@text="Log In"]').click();
    // await driver.pause(3000)
  });

  it("Não deve fazer login com credenciais inválidas", async () => {
    //Acesse o username input element pelo seu content-desc
    await $('//*[@content-desc="Username input field"]').setValue("wrongUser");
    //Acesse o username input element pelo seu class + content-desc
    await $(
      '//android.widget.EditText[@content-desc="Password input field"]'
    ).setValue("wrongPassword");
    //Acesse o login button por padrão xpath
    await $(
      '//android.view.ViewGroup[@content-desc="Login button"]/android.widget.TextView'
    ).click();
    await driver.pause(3000);

    //Validar a mensagem de erro
    await expect(
      $(
        '//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView'
      )
    ).toHaveText("Provided credentials do not match any user in this service.");
  });

  it("Deve fazer login com credenciais válidas", async () => {
    //Acesse o username input element pelo seu content-desc
    await $('//*[@content-desc="Username input field"]').setValue(
      "bob@example.com"
    );
    //Acesse o username input element pelo seu class + content-desc
    await $(
      '//android.widget.EditText[@content-desc="Password input field"]'
    ).setValue("10203040");
    //Acesse o login button por padrão xpath
    await $(
      '//android.view.ViewGroup[@content-desc="Login button"]/android.widget.TextView'
    ).click();
    // await driver.pause(3000);

    //Acesse o Cabeçalho do produto element usando o UISelector
    //https://webdriver.io/docs/selectors/#android-uiautomator
    //https://developer.android.com/reference/androidx/test/uiautomator/UiSelector
    const selector =
      'new UiSelector().text("Products").className("android.widget.TextView")';
    const productsUISelector = await $(`android=${selector}`);
    await expect(productsUISelector).toHaveText("Products");
  });
});
