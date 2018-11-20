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
var configString = '';
var pool = new _pg.Pool(configString);
if (process.env.NODE_ENV) {
    if (process.env.NODE_ENV.trim() == 'test') configString = _databaseConfiguration2.default.test.connectionString;
    if (process.env.NODE_ENV.trim() == 'development') configString = _databaseConfiguration2.default.development;
}

var DbManager = function () {
    function DbManager() {
        _classCallCheck(this, DbManager);
    }

    _createClass(DbManager, null, [{
        key: 'insertNewParcel',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(packageName, pickupLocation, dropOfflocation, presentLocation, weight, price, initialStatus, userId) {
                var q, response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                q = 'INSERT INTO parcels (packagename, pickuplocation, dropofflocation, presentlocation, weight, price, status, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
                                _context.next = 4;
                                return pool.query(q, [packageName, pickupLocation, dropOfflocation, presentLocation, weight, price, initialStatus, userId]);

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

            function insertNewParcel(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8) {
                return _ref.apply(this, arguments);
            }

            return insertNewParcel;
        }()
        // get all parcels

    }, {
        key: 'getAllParcels',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var q, response;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                q = 'SELECT packagename, dropofflocation, pickuplocation, price, presentlocation, weight, price, status FROM parcels;';
                                _context2.next = 4;
                                return pool.query(q);

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

            function getAllParcels() {
                return _ref2.apply(this, arguments);
            }

            return getAllParcels;
        }()
        // get all parcels by a speciific user

    }, {
        key: 'getAllUserParcels',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(userId) {
                var q, response;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.prev = 0;
                                q = 'SELECT packageName, destination, pickupLocation, price, userName FROM parcels WHERE user_id = $1';
                                _context3.next = 4;
                                return pool.query(q, [userId]);

                            case 4:
                                response = _context3.sent;

                                console.log(response.rowCount);
                                return _context3.abrupt('return', response);

                            case 9:
                                _context3.prev = 9;
                                _context3.t0 = _context3['catch'](0);

                                console.error(_context3.t0);
                                return _context3.abrupt('return', _context3.t0);

                            case 13:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[0, 9]]);
            }));

            function getAllUserParcels(_x9) {
                return _ref3.apply(this, arguments);
            }

            return getAllUserParcels;
        }()
        // select user if the user exists

    }, {
        key: 'selectUserId',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(email) {
                var q, response;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.prev = 0;
                                q = 'SELECT user_id FROM users WHERE email=$1';
                                _context4.next = 4;
                                return pool.query(q, [email]);

                            case 4:
                                response = _context4.sent;

                                console.log(response);
                                return _context4.abrupt('return', response);

                            case 9:
                                _context4.prev = 9;
                                _context4.t0 = _context4['catch'](0);

                                console.log(_context4.t0);
                                return _context4.abrupt('return', _context4.t0);

                            case 13:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this, [[0, 9]]);
            }));

            function selectUserId(_x10) {
                return _ref4.apply(this, arguments);
            }

            return selectUserId;
        }()
        // this is to register a new user

    }, {
        key: 'registerNewUser',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(userName, email, password) {
                var q, response;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.prev = 0;
                                q = 'INSERT INTO users(userName, email, password) VALUES($1, $2, $3) RETURNING *;';
                                _context5.next = 4;
                                return pool.query(q, [userName, email, password]);

                            case 4:
                                response = _context5.sent;

                                console.log(' database response', response);
                                return _context5.abrupt('return', response);

                            case 9:
                                _context5.prev = 9;
                                _context5.t0 = _context5['catch'](0);

                                console.log('error name', _context5.t0.name);

                            case 12:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this, [[0, 9]]);
            }));

            function registerNewUser(_x11, _x12, _x13) {
                return _ref5.apply(this, arguments);
            }

            return registerNewUser;
        }()
        // this is to login an existing user

    }, {
        key: 'loginExistingUser',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(email, password) {
                var q, response;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                _context6.prev = 0;
                                q = 'SELECT * FROM users WHERE email=$1 AND password=$2';
                                _context6.next = 4;
                                return pool.query(q, [email, password]);

                            case 4:
                                response = _context6.sent;

                                console.log('login response', response);
                                return _context6.abrupt('return', response);

                            case 9:
                                _context6.prev = 9;
                                _context6.t0 = _context6['catch'](0);

                                console.log(_context6.t0);

                            case 12:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this, [[0, 9]]);
            }));

            function loginExistingUser(_x14, _x15) {
                return _ref6.apply(this, arguments);
            }

            return loginExistingUser;
        }()
        // this is the route to enable a user to update a parcel destination

    }, {
        key: 'updateParcelDestination',
        value: function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(newdestination, parcelId, userId) {
                var q, response;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                _context7.prev = 0;
                                q = 'UPDATE parcels SET destination=$1 WHERE parcelid=$2 AND userid=$3 RETURNING *;';
                                _context7.next = 4;
                                return pool.query(q, [newdestination, parcelId, userId]);

                            case 4:
                                response = _context7.sent;

                                console.log(response);
                                _context7.next = 11;
                                break;

                            case 8:
                                _context7.prev = 8;
                                _context7.t0 = _context7['catch'](0);

                                console.log(_context7.t0);

                            case 11:
                            case 'end':
                                return _context7.stop();
                        }
                    }
                }, _callee7, this, [[0, 8]]);
            }));

            function updateParcelDestination(_x16, _x17, _x18) {
                return _ref7.apply(this, arguments);
            }

            return updateParcelDestination;
        }()
        // this is for the admin to change the status of a parcel delivery order and this route should be accessible to admin only

    }, {
        key: 'updateParcelStatus',
        value: function () {
            var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(newStatus, parcelId) {
                var q, response;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                        switch (_context8.prev = _context8.next) {
                            case 0:
                                _context8.prev = 0;
                                q = 'UPDATE parcels SET status=$1 WHERE parcel_id=$2 RETURNING *;';
                                _context8.next = 4;
                                return pool.query(q, [newStatus, parcelId]);

                            case 4:
                                response = _context8.sent;

                                console.log(response);
                                _context8.next = 11;
                                break;

                            case 8:
                                _context8.prev = 8;
                                _context8.t0 = _context8['catch'](0);

                                console.log(_context8.t0);

                            case 11:
                            case 'end':
                                return _context8.stop();
                        }
                    }
                }, _callee8, this, [[0, 8]]);
            }));

            function updateParcelStatus(_x19, _x20) {
                return _ref8.apply(this, arguments);
            }

            return updateParcelStatus;
        }()
        // this is for the admin to change the present location of a parcel delivery order and this route should be accessible to admin only

    }, {
        key: 'updateParcelslocation',
        value: function () {
            var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(newLocation, parcelId) {
                var q, response;
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) {
                        switch (_context9.prev = _context9.next) {
                            case 0:
                                _context9.prev = 0;
                                q = 'UPDATE parcels SET presentlocation=$1 WHERE parcel_id=$2 RETURNING *;';
                                _context9.next = 4;
                                return pool.query(q, [newLocation, parcelId]);

                            case 4:
                                response = _context9.sent;

                                console.log(response);
                                _context9.next = 11;
                                break;

                            case 8:
                                _context9.prev = 8;
                                _context9.t0 = _context9['catch'](0);

                                console.log(_context9.t0);

                            case 11:
                            case 'end':
                                return _context9.stop();
                        }
                    }
                }, _callee9, this, [[0, 8]]);
            }));

            function updateParcelslocation(_x21, _x22) {
                return _ref9.apply(this, arguments);
            }

            return updateParcelslocation;
        }()
    }]);

    return DbManager;
}();

exports.default = DbManager;
//# sourceMappingURL=dbManager.js.map