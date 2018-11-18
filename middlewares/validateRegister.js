import helpers from '../helpers/handleError';

const validateRegister = (req, res, next) => {
    let { Email, userName, password } = req.body;
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(Email)) {
        return next(helpers.handleError('this email is not valid'))
    }else if (!Email) {
        return next(helpers.handleError('please fill in a valid email'))
    }else if (!password) {
        return next(helpers.handleError('please fill in a password'))
    }else  if (password < 8) {
        return next(helpers.handleError('your password cannot be less than 8 characters'))
    }else if (!userName) {
        return next(helpers.handleError('please fill in a valid username'))
    }else if (userName < 5) {
        return next(helpers.handleError('your username cannot be less than 5 characters'))
    }
    return next();
}
export default validateRegister;