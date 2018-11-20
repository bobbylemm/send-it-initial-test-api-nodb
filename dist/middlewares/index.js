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

var _validateToken = require('../middlewares/validateToken');

var _validateToken2 = _interopRequireDefault(_validateToken);

var _validateAdmin = require('../middlewares/validateAdmin');

var _validateAdmin2 = _interopRequireDefault(_validateAdmin);

var _validateParcelStatusUpdate = require('../middlewares/validateParcelStatusUpdate');

var _validateParcelStatusUpdate2 = _interopRequireDefault(_validateParcelStatusUpdate);

var _validateLocationUpdate = require('../middlewares/validateLocationUpdate');

var _validateLocationUpdate2 = _interopRequireDefault(_validateLocationUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Middlewares = {
    validateLogin: _validateLogin2.default,
    validateRegister: _validateRegister2.default,
    validateParcels: _validateParcels2.default,
    validateToken: _validateToken2.default,
    validateAdmin: _validateAdmin2.default,
    validateParcelStatusUpdate: _validateParcelStatusUpdate2.default,
    validateLocationUpdate: _validateLocationUpdate2.default
};
exports.default = Middlewares;
//# sourceMappingURL=index.js.map