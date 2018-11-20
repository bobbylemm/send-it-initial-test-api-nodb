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

var _sendMaile = require('../mailer/sendMaile');

var _sendMaile2 = _interopRequireDefault(_sendMaile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var parcelController = function () {
    function parcelController() {
        _classCallCheck(this, parcelController);
    }

    _createClass(parcelController, null, [{
        key: 'getAllParcels',

        // this is to get all parcels
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
                var response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log('the request object', req.user);
                                _context.prev = 1;
                                _context.next = 4;
                                return _parcelsManager2.default.getAllParcels();

                            case 4:
                                response = _context.sent;
                                return _context.abrupt('return', res.status(200).json({
                                    message: "there was success",
                                    response: response
                                }));

                            case 8:
                                _context.prev = 8;
                                _context.t0 = _context['catch'](1);
                                return _context.abrupt('return', res.status(400).json({
                                    message: "error in retrieving",
                                    e: _context.t0
                                }));

                            case 11:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 8]]);
            }));

            function getAllParcels(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return getAllParcels;
        }()

        // this is to post a particular question

    }, {
        key: 'createNewParcel',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
                var userId, initialStatus, _req$body, packageName, pickupLocation, dropOfflocation, presentLocation, weight, price, response;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                userId = req.user.user.user_id;
                                initialStatus = 'processing';
                                _req$body = req.body, packageName = _req$body.packageName, pickupLocation = _req$body.pickupLocation, dropOfflocation = _req$body.dropOfflocation, presentLocation = _req$body.presentLocation, weight = _req$body.weight, price = _req$body.price;
                                _context2.prev = 3;
                                _context2.next = 6;
                                return _parcelsManager2.default.addNewParcel(packageName, pickupLocation, dropOfflocation, presentLocation, weight, price, initialStatus, userId);

                            case 6:
                                response = _context2.sent;
                                return _context2.abrupt('return', res.status(200).json({
                                    message: 'new parcel created',
                                    resp: response
                                }));

                            case 11:
                                _context2.prev = 11;
                                _context2.t0 = _context2['catch'](3);
                                return _context2.abrupt('return', res.status(400).json({
                                    message: "parcel could not be added"
                                }));

                            case 14:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[3, 11]]);
            }));

            function createNewParcel(_x3, _x4) {
                return _ref2.apply(this, arguments);
            }

            return createNewParcel;
        }()
        // this is to get a specific parcel form a specific user

    }, {
        key: 'getParcelsByUser',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
                var userId, response;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                userId = req.body.userId;
                                _context3.prev = 1;
                                _context3.next = 4;
                                return _parcelsManager2.default.getAllUsersParcelOrder(userId);

                            case 4:
                                response = _context3.sent;

                                res.status(200).json({
                                    message: 'got all this users parcels',
                                    response: response
                                });
                                console.log(response);
                                _context3.next = 12;
                                break;

                            case 9:
                                _context3.prev = 9;
                                _context3.t0 = _context3['catch'](1);

                                console.log(_context3.t0);

                            case 12:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[1, 9]]);
            }));

            function getParcelsByUser(_x5, _x6) {
                return _ref3.apply(this, arguments);
            }

            return getParcelsByUser;
        }()

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
            var parcelId = req.params.pid;
            var newStatus = req.body.newStatus;

            try {
                var response = _parcelsManager2.default.updateParcelStatus(newStatus, parcelId);
                var mail = _sendMaile2.default.sendMail();
                mail.then(function (res) {
                    return console.log('the response', res);
                }).catch(function (err) {
                    return console.log('the error', err);
                });
                return res.status(200).json({
                    messsage: 'parcel status was updated successfully'
                });
            } catch (e) {
                return res.status(400).json({
                    message: 'could not update the parcel status'
                });
            }
        }
        // this is to update a parcel order present location

    }, {
        key: 'updateParcelPresentLocation',
        value: function updateParcelPresentLocation(req, res) {
            var parcelId = req.params.pid;
            var newLocation = req.body.newLocation;

            try {
                var response = _parcelsManager2.default.updateParcelPresentlocation(newLocation, parcelId);
                return res.status(200).json({
                    messsage: 'parcel present location was updated successfully'
                });
            } catch (e) {
                return res.status(400).json({
                    message: 'could not update the parcel present location'
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