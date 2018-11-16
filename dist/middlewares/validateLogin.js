'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var validateLogin = function validateLogin(req, res, next) {
    var _req$body = req.body,
        email = _req$body.email,
        password = _req$body.password;

    if (!email || !password) {
        return res.status(400).json({
            message: 'please fill in your email and password'
        });
    }
    return next();
};
exports.default = validateLogin;
//# sourceMappingURL=validateLogin.js.map