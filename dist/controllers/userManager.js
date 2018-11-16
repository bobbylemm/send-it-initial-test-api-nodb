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

var UserManager = function () {
    function UserManager() {
        _classCallCheck(this, UserManager);
    }

    _createClass(UserManager, [{
        key: 'registerUser',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(parcelId, packageName, destination, pickupLocation, price, userId, userName) {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return _dbManager2.default.insertNewParcel(parcelId, packageName, destination, pickupLocation, price, userId, userName);

                            case 3:
                                res = _context.sent;

                                console.log(res);
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

            function registerUser(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
                return _ref.apply(this, arguments);
            }

            return registerUser;
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
        // this is to get all parcels created by a specific user

    }, {
        key: 'getAllUsersParcelOrder',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(userId) {
                var res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.prev = 0;
                                _context3.next = 3;
                                return _dbManager2.default.getAllUserParcels(userId);

                            case 3:
                                res = _context3.sent;

                                console.log(res);
                                _context3.next = 10;
                                break;

                            case 7:
                                _context3.prev = 7;
                                _context3.t0 = _context3['catch'](0);

                                console.log(_context3.t0);

                            case 10:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[0, 7]]);
            }));

            function getAllUsersParcelOrder(_x8) {
                return _ref3.apply(this, arguments);
            }

            return getAllUsersParcelOrder;
        }()
    }]);

    return UserManager;
}();

exports.default = UserManager;
//# sourceMappingURL=userManager.js.map