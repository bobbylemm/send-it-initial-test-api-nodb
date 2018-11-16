'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _validateRegister = require('../middlewares/validateRegister');

var _validateRegister2 = _interopRequireDefault(_validateRegister);

var _validateLogin = require('../middlewares/validateLogin');

var _validateLogin2 = _interopRequireDefault(_validateLogin);

var _validateParcels = require('../middlewares/validateParcels');

var _validateParcels2 = _interopRequireDefault(_validateParcels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Middlewares = {
    validateLogin: _validateLogin2.default,
    validateRegister: _validateRegister2.default,
    validateParcels: _validateParcels2.default
};
exports.default = Middlewares;
//# sourceMappingURL=index.js.map