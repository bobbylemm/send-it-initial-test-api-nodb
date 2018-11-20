'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dbManager = require('../dbManager/dbManager');

var _dbManager2 = _interopRequireDefault(_dbManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ParcelManager = function () {
    function ParcelManager() {
        _classCallCheck(this, ParcelManager);
    }

    _createClass(ParcelManager, null, [{
        key: 'addNewParcel',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(packageName, pickupLocation, dropOfflocation, presentLocation, weight, price, initialStatus, userId) {
                var resp;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return _dbManager2.default.insertNewParcel(packageName, pickupLocation, dropOfflocation, presentLocation, weight, price, initialStatus, userId);

                            case 3:
                                resp = _context.sent;

                                console.log(resp);
                                _context.next = 10;
                                break;

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context['catch'](0);

                                console.log(_context.t0);

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 7]]);
            }));

            function addNewParcel(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8) {
                return _ref.apply(this, arguments);
            }

            return addNewParcel;
        }()
        // this is to get all questions

    }, {
        key: 'getAllParcels',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                _context2.next = 3;
                                return _dbManager2.default.getAllParcels();

                            case 3:
                                res = _context2.sent;

                                console.log(res);
                                _context2.next = 10;
                                break;

                            case 7:
                                _context2.prev = 7;
                                _context2.t0 = _context2['catch'](0);

                                console.log(_context2.t0);

                            case 10:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[0, 7]]);
            }));

            function getAllParcels() {
                return _ref2.apply(this, arguments);
            }

            return getAllParcels;
        }()
        // this is to change the parcel delivery status and this route should be accessible to the admin only

    }, {
        key: 'updateParcelStatus',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(newStatus, parcelId) {
                var res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.prev = 0;
                                _context3.next = 3;
                                return _dbManager2.default.updateParcelStatus(newStatus, parcelId);

                            case 3:
                                res = _context3.sent;
                                return _context3.abrupt('return', res);

                            case 7:
                                _context3.prev = 7;
                                _context3.t0 = _context3['catch'](0);
                                return _context3.abrupt('return', _context3.t0);

                            case 10:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[0, 7]]);
            }));

            function updateParcelStatus(_x9, _x10) {
                return _ref3.apply(this, arguments);
            }

            return updateParcelStatus;
        }()
        // this is to change the parcel delivery status and this route should be accessible to the admin only

    }, {
        key: 'updateParcelPresentlocation',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(newLocation, parcelId) {
                var res;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.prev = 0;
                                _context4.next = 3;
                                return _dbManager2.default.updateParcelslocation(newLocation, parcelId);

                            case 3:
                                res = _context4.sent;
                                return _context4.abrupt('return', res);

                            case 7:
                                _context4.prev = 7;
                                _context4.t0 = _context4['catch'](0);
                                return _context4.abrupt('return', _context4.t0);

                            case 10:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this, [[0, 7]]);
            }));

            function updateParcelPresentlocation(_x11, _x12) {
                return _ref4.apply(this, arguments);
            }

            return updateParcelPresentlocation;
        }()
        // this is to get all parcels created by a specific user

    }, {
        key: 'getAllUsersParcelOrder',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(userId) {
                var res;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.prev = 0;
                                _context5.next = 3;
                                return _dbManager2.default.getAllUserParcels(userId);

                            case 3:
                                res = _context5.sent;

                                console.log(res);
                                _context5.next = 10;
                                break;

                            case 7:
                                _context5.prev = 7;
                                _context5.t0 = _context5['catch'](0);

                                console.log(_context5.t0);

                            case 10:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this, [[0, 7]]);
            }));

            function getAllUsersParcelOrder(_x13) {
                return _ref5.apply(this, arguments);
            }

            return getAllUsersParcelOrder;
        }()
    }]);

    return ParcelManager;
}();

exports.default = ParcelManager;
//# sourceMappingURL=parcelsManager.js.map