const CatalogScreen = require("../screenObjects/android/Catalog.screen")
const LoginScreen = require("../screenObjects/android/Login.screen")
const LeftSideMenuScreen = require("../screenObjects/android/LeftSideMenu.screen")

describe("Minha demonstração de login", () => {
  beforeEach(async () => {
    await LeftSideMenuScreen.expandMenuButton.click();
    await LeftSideMenuScreen.loginMenuOption.click();
  });

  it("Não deve fazer login com credenciais inválidas", async () => {
    LoginScreen.login("wrongUser", "wrongPassword");
    await expect(LoginScreen.errorMessageText).toHaveText(
      "Provided credentials do not match any user in this service."
    );
  });

  it("Deve fazer login com credenciais válidas", async () => {
    LoginScreen.login("bob@example.com", "10203040");
    await expect(CatalogScreen.productsHeader).toHaveText("Products");
  });
});
