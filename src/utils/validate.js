export const checkLoginValidData = (email, password) => {

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)

    if (!isEmailValid) {
        return "Email Id is not valid"
    }
    if (!isPasswordValid) {
        return "Password is not valid"
    }
    return null;
}

export const checkSignUpValid = (email, password, confirmPassword) => {
    console.log("🚀 ~ file: validate.js:20 ~ checkSignUpValid ~ confirmPassword:", confirmPassword)


    const message = checkLoginValidData(email, password);
    if (message) {
        return message
    }

    const isConfirmPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(confirmPassword)
    if (!isConfirmPassword) {
        return "Confirm Password is not valid";
    }
    console.log("🚀 ~ file: validate.js:33 ~ checkSignUpValid ~ password:", password, confirmPassword)
    if (password !== confirmPassword) {
        return "Password and Confirm Password does not matched!";
    }
    return null;

}
