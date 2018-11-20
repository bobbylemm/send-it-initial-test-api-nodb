'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dbManager = require('../dbManager/dbManager');

var _dbManager2 = _interopRequireDefault(_dbManager);

var _handleError = require('../helpers/handleError');

var _handleError2 = _interopRequireDefault(_handleError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserManager = function () {
    function UserManager() {
        _classCallCheck(this, UserManager);
    }

    _createClass(UserManager, null, [{
        key: 'registerUser',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(username, email, password) {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return _dbManager2.default.registerNewUser(username, email, password);

                            case 3:
                                res = _context.sent;
                                return _context.abrupt('return', res);

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context['catch'](0);

                                console.log('user manager error', _context.t0);

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 7]]);
            }));

            function registerUser(_x, _x2, _x3) {
                return _ref.apply(this, arguments);
            }

            return registerUser;
        }()
        // this is to login a user

    }, {
        key: 'loginUser',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(email, password) {
                var res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                _context2.next = 3;
                                return _dbManager2.default.loginExistingUser(email, password);

                            case 3:
                                res = _context2.sent;
                                return _context2.abrupt('return', res);

                            case 7:
                                _context2.prev = 7;
                                _context2.t0 = _context2['catch'](0);
                                return _context2.abrupt('return', _context2.t0);

                            case 10:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[0, 7]]);
            }));

            function loginUser(_x4, _x5) {
                return _ref2.apply(this, arguments);
            }

            return loginUser;
        }()
        // this is to check for a user

    }, {
        key: 'checkUser',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(email) {
                var response;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.prev = 0;
                                _context3.next = 3;
                                return _dbManager2.default.selectUserId(email);

                            case 3:
                                response = _context3.sent;
                                return _context3.abrupt('return', response);

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

            function checkUser(_x6) {
                return _ref3.apply(this, arguments);
            }

            return checkUser;
        }()
        // this is to get all parcels

    }, {
        key: 'getAllParcels',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var res;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.prev = 0;
                                _context4.next = 3;
                                return _dbManager2.default.getAllParcels();

                            case 3:
                                res = _context4.sent;

                                console.log(res);
                                _context4.next = 10;
                                break;

                            case 7:
                                _context4.prev = 7;
                                _context4.t0 = _context4['catch'](0);

                                console.log(_context4.t0);

                            case 10:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this, [[0, 7]]);
            }));

            function getAllParcels() {
                return _ref4.apply(this, arguments);
            }

            return getAllParcels;
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
                                return _context5.abrupt('return', res);

                            case 7:
                                _context5.prev = 7;
                                _context5.t0 = _context5['catch'](0);

                                console.log(_context5.t0);
                                return _context5.abrupt('return', _context5.t0);

                            case 11:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this, [[0, 7]]);
            }));

            function getAllUsersParcelOrder(_x7) {
                return _ref5.apply(this, arguments);
            }

            return getAllUsersParcelOrder;
        }()
        // this is to change the destination of a parcel order

    }, {
        key: 'changeParcelDestination',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(newdestination, parcelId, userId) {
                var res;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                _context6.prev = 0;
                                _context6.next = 3;
                                return _dbManager2.default.updateParcelDestination(newdestination, parcelId, userId);

                            case 3:
                                res = _context6.sent;

                                console.log(res);
                                _context6.next = 10;
                                break;

                            case 7:
                                _context6.prev = 7;
                                _context6.t0 = _context6['catch'](0);

                                console.log(_context6.t0);

                            case 10:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this, [[0, 7]]);
            }));

            function changeParcelDestination(_x8, _x9, _x10) {
                return _ref6.apply(this, arguments);
            }

            return changeParcelDestination;
        }()
    }]);

    return UserManager;
}();

exports.default = UserManager;
//# sourceMappingURL=userManager.js.map