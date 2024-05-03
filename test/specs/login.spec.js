const HomeScreen = require("../screenObjects/android/Home.screen");
const LoginScreen = require("../screenObjects/android/Login.screen");

let = email = 'alinebirello03@gmail.com'
let password = 'password01'
describe('Logar no aplicativo Ebac Shop', () => {
    it('Login com sucesso', async () => {
        await HomeScreen.clickProfile.click()
        await LoginScreen.login(email, password)
        await expect(HomeScreen.validHome).toHaveText("EBAC Store");
        await HomeScreen.clickProfile.click()
        await expect(HomeScreen.validProfile).toHaveText("birello aline");
        await LoginScreen.btnClose.click()
        await LoginScreen.clickYes.click()
        await LoginScreen.backLoginscreen.click();

    

    
    })
})