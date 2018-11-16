'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pg = require('pg');

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _databaseConfiguration = require('../config/databaseConfiguration');

var _databaseConfiguration2 = _interopRequireDefault(_databaseConfiguration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_dotenv2.default.config();
// const pool = new pg.Pool(config.development);
var pool = new _pg.Pool(_databaseConfiguration2.default.development);

var DbManager = function () {
    function DbManager() {
        _classCallCheck(this, DbManager);
    }

    _createClass(DbManager, [{
        key: 'getAllParcels',

        // get all parcels
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var q, response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                q = 'SELECT packageName, destination, pickupLocation, price FROM parcels;';
                                _context.next = 4;
                                return pool.query(q);

                            case 4:
                                response = _context.sent;

                                console.log(response);
                                _context.next = 11;
                                break;

                            case 8:
                                _context.prev = 8;
                                _context.t0 = _context['catch'](0);

                                console.error(_context.t0);

                            case 11:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 8]]);
            }));

            function getAllParcels() {
                return _ref.apply(this, arguments);
            }

            return getAllParcels;
        }()
        // get all parcels by a speciific user

    }, {
        key: 'getAllUserParcels',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(userId) {
                var q, response;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                q = 'SELECT packageName, destination, pickupLocation, price, userName FROM parcels WHERE userId = $1;';
                                _context2.next = 4;
                                return this.pool.query(q, [userId]);

                            case 4:
                                response = _context2.sent;

                                console.log(response);
                                _context2.next = 11;
                                break;

                            case 8:
                                _context2.prev = 8;
                                _context2.t0 = _context2['catch'](0);

                                console.error(_context2.t0);

                            case 11:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[0, 8]]);
            }));

            function getAllUserParcels(_x) {
                return _ref2.apply(this, arguments);
            }

            return getAllUserParcels;
        }()
        // this is to register a new user

    }, {
        key: 'registerNewUser',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(userName, email, password) {
                var q, response;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.prev = 0;
                                q = 'INSERT INTO users(userName, email, password) VALUES($1, $2, $3);';
                                _context3.next = 4;
                                return pool.query(q, [userName, email, password]);

                            case 4:
                                response = _context3.sent;

                                console.log(response);
                                _context3.next = 11;
                                break;

                            case 8:
                                _context3.prev = 8;
                                _context3.t0 = _context3['catch'](0);

                                console.log(_context3.t0);

                            case 11:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[0, 8]]);
            }));

            function registerNewUser(_x2, _x3, _x4) {
                return _ref3.apply(this, arguments);
            }

            return registerNewUser;
        }()
    }], [{
        key: 'insertNewParcel',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(parcelId, packageName, destination, pickupLocation, price, userId, userName) {
                var q, response;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.prev = 0;
                                q = 'INSERT INTO parcels(parcelId, packageName, destination, pickupLocation, price, userId, userName);';
                                _context4.next = 4;
                                return pool.query(q, [parcelId, packageName, destination, pickupLocation, price, userId, userName]);

                            case 4:
                                response = _context4.sent;

                                console.log(response);
                                _context4.next = 11;
                                break;

                            case 8:
                                _context4.prev = 8;
                                _context4.t0 = _context4['catch'](0);

                                console.error(_context4.t0);

                            case 11:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this, [[0, 8]]);
            }));

            function insertNewParcel(_x5, _x6, _x7, _x8, _x9, _x10, _x11) {
                return _ref4.apply(this, arguments);
            }

            return insertNewParcel;
        }()
    }]);

    return DbManager;
}();

exports.default = DbManager;
//# sourceMappingURL=dbManager.js.map