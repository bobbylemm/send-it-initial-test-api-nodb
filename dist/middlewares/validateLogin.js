'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _handleError = require('../helpers/handleError');

var _handleError2 = _interopRequireDefault(_handleError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validateLogin = function validateLogin(req, res, next) {
    var _req$body = req.body,
        Email = _req$body.Email,
        password = _req$body.password;

    var emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(Email)) {
        return next(_handleError2.default.handleError('this email is not valid'));
    }
    if (!Email) {
        return next(_handleError2.default.handleError('please fill in a valid email'));
    }
    if (!password) {
        return next(_handleError2.default.handleError('please fill in a password'));
    }
    return next();
};
exports.default = validateLogin;
//# sourceMappingURL=validateLogin.js.map