'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _databaseController = require('../controllers/databaseController');

var _databaseController2 = _interopRequireDefault(_databaseController);

var _databaseConfig = require('../database/databaseConfig');

var _databaseConfig2 = _interopRequireDefault(_databaseConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
// this is the route to get all parcels
// GET ALL PARCELS
router.get('/', _databaseController2.default.getAllParcels);
// this is the route for creating parcels
// CREATE PARCELS
router.post('/', _databaseController2.default.createNewParcel);
// this is the route to get a specific parcel
// GET A SPECIFIC PARCEL
router.get('/:id', _databaseController2.default.getSpecificParcel);
// this is to update the status of an existing parcel order
// PUT A STATUS UPDATE

// this is to delete a specific parcel
// DELETE A SPECIFIC ROUTE
router.delete('/delete/:id', _databaseController2.default.deleteSpecificParcel);

exports.default = router;