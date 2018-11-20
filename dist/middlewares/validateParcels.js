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
        dropOfflocation = _req$body.dropOfflocation,
        presentLocation = _req$body.presentLocation,
        weight = _req$body.weight,
        price = _req$body.price;

    if (!packageName || packageName == Number) {
        return next(_handleError2.default.handleError('please put in a valid parcel name'));
    }
    if (!dropOfflocation) {
        return next(_handleError2.default.handleError('please put in a destination'));
    }
    if (!pickupLocation) {
        return next(_handleError2.default.handleError('please put in a pickup location'));
    }
    if (!presentLocation) {
        return next(_handleError2.default.handleError('please put in a present location'));
    }
    if (!weight) {
        return next(_handleError2.default.handleError('please put in a weight'));
    }
    if (!price) {
        return next(_handleError2.default.handleError('please put in a pickup location'));
    }
    return next();
};
exports.default = validateParcels;
//# sourceMappingURL=validateParcels.js.map