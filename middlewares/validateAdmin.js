import helpers from '../helpers/handleError';

const validateAdmin = (req, res, next) => {
    const email = req.user.user.email;
    const Admin = ['tuwo@gmail.com'];
    console.log(email)
    let adminCheck = Admin.includes(email)
    console.log('admin check', adminCheck);

    if (adminCheck == false) {
        return next(helpers.handleError('you are not authorized to view this page, admin only'))
    }
    return next();
}
export default validateAdmin;