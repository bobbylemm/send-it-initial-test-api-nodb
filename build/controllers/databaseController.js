"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _databaseConfig = require("../database/databaseConfig");

var _databaseConfig2 = _interopRequireDefault(_databaseConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var parcelController = function () {
    function parcelController() {
        _classCallCheck(this, parcelController);
    }

    _createClass(parcelController, null, [{
        key: "getAllParcels",

        // this is to get all parcels
        value: function getAllParcels(req, res) {
            return res.json({
                response: "you have sent me a get request to get all questions",
                parcels: _databaseConfig2.default
            });
        }

        // this is to post a particular question

    }, {
        key: "createNewParcel",
        value: function createNewParcel(req, res) {
            var newId = _databaseConfig2.default[_databaseConfig2.default.length - 1].id + 1;
            var packageName = req.body.packageName,
                destination = req.body.destination,
                pickupLocation = req.body.pickupLocation,
                price = req.body.price;
            var newParcel = {
                id: newId,
                packageName: packageName,
                destination: destination,
                pickupLocation: pickupLocation,
                price: price
            };
            if (newParcel) {
                _databaseConfig2.default.push(newParcel);
                return res.status(200).json({
                    message: "new parcel created"
                });
            } else {
                return res.status(400).json({
                    message: "could not add new parcel"
                });
            }
        }

        // this is to get a specific parcel

    }, {
        key: "getSpecificParcel",
        value: function getSpecificParcel(req, res) {
            var parcelId = req.params.id;
            var findParcel = _databaseConfig2.default.find(function (parcel) {
                return parcel.id == parcelId;
            });
            if (findParcel) {
                return res.status(200).json({
                    message: "the parcel was found",
                    parcel: findParcel
                });
            } else {
                return res.status(400).json({
                    message: "sorry the parcel was not found"
                });
            }
        }

        // this is to delete a specific parcel

    }, {
        key: "deleteSpecificParcel",
        value: function deleteSpecificParcel(req, res) {
            var parcelId = req.params.id;
            var findParcel = _databaseConfig2.default.find(function (parcel) {
                return parcel.id == parcelId;
            });
            if (findParcel) {
                var allCurrentParcels = _databaseConfig2.default.filter(function (parcel) {
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