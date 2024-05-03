class CreateScreen {
    get inputFirstName() {
        return $('//android.widget.EditText[contains(@text, "First Name")]')
    }
    get inputLastName() {
        return $('//android.widget.EditText[contains(@text, "Last Name")]')
    }
    get inputPhoneNumber() {
        return $('//android.widget.EditText[contains(@text, "Phone Number")]')
    }
    get inputEmailAddress() {
        return $('//android.widget.EditText[contains(@text, "Email Address")]')
    }
    get inputPassword() {
        return $('//android.widget.EditText[contains(@text, "Password")]')
    }
    get inputConfirmPassword() {
        return $('//android.widget.EditText[contains(@text, "Password")]')
    }
    get buttonCreate() {
        return $('~Create')
    }

    async createAccount(firstName, lastName, phoneNumber, emailAddress, password, confirmPassword) {
        await this.inputFirstName.setValue(firstName)
        await this.inputLastName.setValue(lastName)
        await this.inputPhoneNumber.setValue(phoneNumber)
        await this.inputEmailAddress.setValue(emailAddress)
        await this.inputPassword.setValue(password)
        await this.inputConfirmPassword.setValue(confirmPassword)
        await browser.pause(3000);
        await this.buttonCreate.click()
    }
    
}module.exports = new CreateScreen()