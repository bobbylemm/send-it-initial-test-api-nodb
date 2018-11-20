'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _parcelControllers = require('../controllers/parcelControllers');

var _parcelControllers2 = _interopRequireDefault(_parcelControllers);

var _usersControllers = require('../controllers/usersControllers');

var _usersControllers2 = _interopRequireDefault(_usersControllers);

var _index = require('../middlewares/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
// this is the route to get all parcels
// GET ALL PARCELS
router.get('/parcels', _index2.default.validateToken, _index2.default.validateAdmin, _parcelControllers2.default.getAllParcels);
// this is the route for creating parcels
// CREATE PARCELS
router.post('/parcels', _index2.default.validateToken, _index2.default.validateParcels, _parcelControllers2.default.createNewParcel);
// this is the route to get a specific parcel
// GET A SPECIFIC PARCEL
router.get('/parcels/:id', _parcelControllers2.default.getSpecificParcel);
// this is to update the status of an existing parcel order
// PUT A STATUS UPDATE
router.put('/parcels/:pid/status', _index2.default.validateParcelStatusUpdate, _index2.default.validateToken, _index2.default.validateAdmin, _parcelControllers2.default.updateParcelStatus);
// this is to update the presentlocation of an existing parcel order
// PUT A PRESENT LOCATION UPDATE
router.put('/parcels/:pid/presentlocation', _index2.default.validateLocationUpdate, _index2.default.validateToken, _index2.default.validateAdmin, _parcelControllers2.default.updateParcelPresentLocation);
// this is to delete a specific parcel
// DELETE A SPECIFIC ROUTE
router.delete('/parcels/:id/delete', _parcelControllers2.default.deleteSpecificParcel);

// this is to get all users 
// GET ALL USERS
router.get('/users', _usersControllers2.default.getAllUsers);
// fetch all parcels for a given user
// GET ALL PARCELS FOR A GIVEN USER
router.get('/users/:uid/parcels', _usersControllers2.default.getAllParcelsByUser);
// this is to change the destination of a parcel order 
router.post('/users/:pid/:uid', _usersControllers2.default.updateParcelDestination);
// this to register a new user
// POST A NEW USER
router.post('/register', _index2.default.validateRegister, _usersControllers2.default.registerUser);
// this is to login in an existing user// 
router.post('/login', _index2.default.validateLogin, _usersControllers2.default.login);

exports.default = router;
//# sourceMappingURL=route.js.map