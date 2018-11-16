'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _handleError = require('../helpers/handleError');

var _handleError2 = _interopRequireDefault(_handleError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validateParcels = function validateParcels(req, res, next) {
    var _req$body = req.body,
        packageName = _req$body.packageName,
        pickupLocation = _req$body.pickupLocation,
        destination = _req$body.destination;

    if (!packageName || packageName == Number) {
        return next(_handleError2.default.handleError('please put in a valid parcel name'));
    } else if (!destination) {
        return next(_handleError2.default.handleError('please put in a destination'));
    } else if (!pickupLocation) {
        return next(_handleError2.default.handleError('please put in a pickup location'));
    }
};
exports.default = validateParcels;
//# sourceMappingURL=validateParcels.js.map