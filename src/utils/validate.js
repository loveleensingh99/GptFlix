export const checkLoginValidData = (email, password) => {

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    //  const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
    const isPasswordValid = true

    if (!isEmailValid) {
        return "Email Id is not valid"
    }
    if (!isPasswordValid) {
        return "Password is not valid"
    }
    return null;
}

export const checkSignUpValid = (name, email, password, confirmPassword) => {
    console.log("🚀 ~ file: validate.js:20 ~ checkSignUpValid ~ confirmPassword:", confirmPassword)


    if (name.trim().length < 3) {
        return "Name is not valid";
    }
    const message = checkLoginValidData(email, password);
    if (message) {
        return message
    }


    // const isConfirmPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(confirmPassword)
    const isConfirmPassword = true
    if (!isConfirmPassword) {
        return "Confirm Password is not valid";
    }
    console.log("🚀 ~ file: validate.js:33 ~ checkSignUpValid ~ password:", password, confirmPassword)
    if (password !== confirmPassword) {
        return "Password and Confirm Password does not matched!";
    }
    return null;

}
