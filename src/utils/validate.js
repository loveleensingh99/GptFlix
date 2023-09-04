export const checkValidData = (email, password, confirmPassword) => {

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?=.*[^\w\s]).{8,}$/.test(password)
    const isConfirmPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?=.*[^\w\s]).{8,}$/.test(confirmPassword)

    if (!isEmailValid) {
        return "Email Id is not valid"
    }
    if (!isPasswordValid) {
        return "Password is not valid"
    }
    if (!isConfirmPassword) {
        return "Confirm Password is not valid"
    }

    return null;



}