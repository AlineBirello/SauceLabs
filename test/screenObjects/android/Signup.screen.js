class SignupScreen {
    get clickSignUp() {
        return $('//android.view.ViewGroup[@content-desc="Sign up"]')
    }
    get validSignUp() {
        return $('android=new UiSelector().text("Welcome to EBAC Shop").className("android.widget.TextView")')
    }
    
}module.exports = new SignupScreen();