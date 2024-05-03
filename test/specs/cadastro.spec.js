const CartScreen = require("../screenObjects/android/Cart.screen");
const CreateScreen = require("../screenObjects/android/Create.screen");
const HomeScreen = require("../screenObjects/android/Home.screen");
const SignupScreen = require("../screenObjects/android/Signup.screen");

let firstName = "birello";
let lastName = "aline";
let phoneNumber = "11999999999";
let emailAddress = "alinebirello02@gmail.com";
let password = "password01";
let confirmPassword = "password01";
describe('Cadastro de usuario', () => {
    it('Cadastro de usuario com sucesso', async () =>{
            await HomeScreen.clickProfile.click();
            //await browser.pause(1000);
            await SignupScreen.clickSignUp.click();
            await expect(SignupScreen.validSignUp).toHaveText("Welcome to EBAC Shop");
            await CreateScreen.createAccount(firstName, lastName,
            phoneNumber, emailAddress, password, confirmPassword)
            await HomeScreen.clickCart.click();
            await CartScreen.backCartscreen.click();
            await HomeScreen.clickProfile.click();
            await expect(HomeScreen.validProfile).toHaveText("Sousa Gilvan");
            await HomeScreen.clickHome.click();
            await HomeScreen.validHome.click();
    });  
});