// Password Validator
export const ValidatePassword = (password) => {

    if (password.length < 8) return false

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()\[\]{}\-_+=|\\:;"'<>,.?/~`]/.test(password);

    return hasUppercase && hasLowercase && hasDigit && hasSpecialChar
}



/* 
    Validate signing form

    Has a state machine

    STATE:
        1 => Firstname empty
        2 => Username empty
        3 => Email empty
        4 => Password empty
        5 => Confirm password empty
        6 => Passowrd not strong enough
        7 => Password and Confirm password don't match
        True => if all criteria is valid
*/
export const ValidateSigningForm = (form) => {
    if (form.firstname.trim() === "") return 1;
    if (form.username.trim() === "") return 2;
    if (form.email.trim() === "") return 3;
    if (form.password.trim() === "") return 4;
    if (form.confirm.trim() === "") return  5;
    if (!ValidatePassword(form.password)) return 6;
    if (form.password != form.confirm) return 7;

    return true;
}


/* 
    Validate login form

    Has a state machine

    STATE:
        1 => Email empty
        2 => Password empty
        True => if all criteria is valid
*/
export const ValidateLoginForm = (form) => {
    if (form.email.trim() === "") return 1;
    if (form.password.trim() === "") return 2;

    return true;
}