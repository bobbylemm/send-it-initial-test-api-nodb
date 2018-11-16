'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parceldb = require('../database/parceldb');

var _parceldb2 = _interopRequireDefault(_parceldb);

var _usersdb = require('../database/usersdb');

var _usersdb2 = _interopRequireDefault(_usersdb);

var _findUsers = require('../helpers/findUsers');

var _findUsers2 = _interopRequireDefault(_findUsers);

var _parcelsManager = require('./parcelsManager');

var _parcelsManager2 = _interopRequireDefault(_parcelsManager);

var _dbManager = require('../dbManager/dbManager');

var _dbManager2 = _interopRequireDefault(_dbManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var db = new _dbManager2.default();
var parManager = new _parcelsManager2.default(db);

var parcelController = function () {
    function parcelController() {
        _classCallCheck(this, parcelController);
    }

    _createClass(parcelController, null, [{
        key: 'getAllParcels',

        // this is to get all parcels
        value: function getAllParcels(req, res) {
            return res.json({
                response: "you have sent me a get request to get all questions",
                parcels: _parceldb2.default
            });
        }

        // this is to post a particular question

    }, {
        key: 'createNewParcel',
        value: function createNewParcel(req, res) {
            var newId = _parceldb2.default[_parceldb2.default.length - 1].id + 1;
            var packageName = req.body.packageName,
                destination = req.body.destination,
                pickupLocation = req.body.pickupLocation,
                price = req.body.price;
            var newParcel = {
                id: newId,
                packageName: packageName,
                destination: destination,
                pickupLocation: pickupLocation,
                price: price,
                status: ""
            };
            var currentUser = _findUsers2.default.findUsers(_usersdb2.default, 'loggedIn', true);
            if (currentUser && newParcel) {
                currentUser.parcels.push(newParcel);
                _parceldb2.default.push(newParcel);
                return res.status(200).json({
                    message: "new parcel created"
                });
            } else {
                return res.status(400).json({
                    message: "could not add new parcel"
                });
            }
        }
        // this is to get a specific parcel form a specific user

    }, {
        key: 'getParcelByUser',
        value: function getParcelByUser(req, res) {
            var userId = req.body.uId;
            parManager.getAllUsersParcelOrder(userId, function (err, res) {
                var allUsersParcels = res;
                if (err) {
                    return res.status(400).json({
                        message: 'there was an error in trying to retrieve users parcels'
                    });
                } else {
                    return res.status(200).json({
                        message: 'successfully fetched all user parcel',
                        parcels: res
                    });
                }
            });
        }

        // this is to get a specific parcel

    }, {
        key: 'getSpecificParcel',
        value: function getSpecificParcel(req, res) {
            var parcelId = req.params.id;
            // const findParcel = helper.findUsers(allParcels, 'id', parcelId);
            // if (findParcel) {
            //     return res.status(200).json({
            //         message: "the parcel was found",
            //         parcel: findParcel
            //     })
            // }else {
            //     return res.status(400).json({
            //         message: "sorry the parcel was not found"
            //     })
            // }
        }
        // this is to update a parcel order status

    }, {
        key: 'updateParcelStatus',
        value: function updateParcelStatus(req, res) {
            var parcelId = req.params.id;
            var findParcel = _findUsers2.default.findUsers(_parceldb2.default, 'id', parcelId);
            if (findParcel) {
                var newStatus = req.body.newStatus;
                res.status(200).json({
                    message: "parcel updated successfully"
                });
                return findParcel.status = newStatus;
            } else {
                return res.status(400).json({
                    message: "could not update parcel order"
                });
            }
        }

        // this is to delete a specific parcel

    }, {
        key: 'deleteSpecificParcel',
        value: function deleteSpecificParcel(req, res) {
            var parcelId = req.params.id;
            var findParcel = _findUsers2.default.findUsers(_parceldb2.default, 'id', parcelId);
            if (findParcel) {
                var allCurrentParcels = _parceldb2.default.filter(function (parcel) {
                    return parcel !== findParcel;
                });
                res.status(200).json({
                    message: "parcel successfully deleted",
                    allparcel: allCurrentParcels
                });
            } else {
                return res.status(400).json({
                    message: "could not delete the parcel"
                });
            }
        }
    }]);

    return parcelController;
}();

exports.default = parcelController;
//# sourceMappingURL=parcelControllers.js.map