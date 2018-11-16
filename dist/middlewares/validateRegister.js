'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _handleError = require('../helpers/handleError');

var _handleError2 = _interopRequireDefault(_handleError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validateRegister = function validateRegister(req, res, next) {
    var _req$body = req.body,
        email = _req$body.email,
        username = _req$body.username,
        password = _req$body.password;

    var emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        return next(_handleError2.default.handleError('this email is not valid'));
    } else if (!email) {
        return next(_handleError2.default.handleError('please fill in a valid email'));
    } else if (!password) {
        return next(_handleError2.default.handleError('please fill in a password'));
    } else if (password < 8) {
        return next(_handleError2.default.handleError('your password cannot be less than 8 characters'));
    } else if (!username) {
        return next(_handleError2.default.handleError('please fill in a valid username'));
    } else if (username < 5) {
        return next(_handleError2.default.handleError('your username cannot be less than 5 characters'));
    }
    return next();
};
exports.default = validateRegister;
//# sourceMappingURL=validateRegister.js.map