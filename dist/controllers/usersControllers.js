'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _usersdb = require('../database/usersdb');

var _usersdb2 = _interopRequireDefault(_usersdb);

var _findUsers = require('../helpers/findUsers');

var _findUsers2 = _interopRequireDefault(_findUsers);

var _userManager = require('./userManager');

var _userManager2 = _interopRequireDefault(_userManager);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_dotenv2.default.config();

var usersControllers = function () {
    function usersControllers() {
        _classCallCheck(this, usersControllers);
    }

    _createClass(usersControllers, null, [{
        key: 'registerUser',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
                var _req$body, userName, Email, password, response, _response$rows$, user_id, email, username, user;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _req$body = req.body, userName = _req$body.userName, Email = _req$body.Email, password = _req$body.password;
                                _context.prev = 1;
                                _context.next = 4;
                                return _userManager2.default.registerUser(userName, Email, password);

                            case 4:
                                response = _context.sent;

                                console.log('user controller reponse', response.rows[0]);

                                if (!(response.status !== 400)) {
                                    _context.next = 10;
                                    break;
                                }

                                _response$rows$ = response.rows[0], user_id = _response$rows$.user_id, email = _response$rows$.email, username = _response$rows$.username;
                                user = { user_id: user_id, email: email, username: username };
                                return _context.abrupt('return', _jsonwebtoken2.default.sign({ user: user }, process.env.SECRET_KEY, function (err, token) {
                                    if (err) {
                                        return console.log(err);
                                    } else {
                                        return res.header('x-auth-token', token).status(200).json({
                                            message: "successfully registered user",
                                            token: token
                                        });
                                    }
                                }));

                            case 10:
                                return _context.abrupt('return', res.status(401).json({
                                    message: 'unable to register user'
                                }));

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](1);

                                res.status(401).json({
                                    message: 'unable to create user'
                                });
                                console.log('user controller error', _context.t0);

                            case 17:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 13]]);
            }));

            function registerUser(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return registerUser;
        }()
        // this is to login a user

    }, {
        key: 'login',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
                var _req$body2, Email, password, response, _response$rows$2, user_id, email, username, user;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _req$body2 = req.body, Email = _req$body2.Email, password = _req$body2.password;
                                _context2.prev = 1;
                                _context2.next = 4;
                                return _userManager2.default.loginUser(Email, password);

                            case 4:
                                response = _context2.sent;

                                console.log('LOGIN CONTROLLER response', response);

                                if (!(response.rows[0] !== undefined)) {
                                    _context2.next = 10;
                                    break;
                                }

                                _response$rows$2 = response.rows[0], user_id = _response$rows$2.user_id, email = _response$rows$2.email, username = _response$rows$2.username;
                                user = { user_id: user_id, email: email, username: username };
                                return _context2.abrupt('return', _jsonwebtoken2.default.sign({ user: user }, process.env.SECRET_KEY, function (err, token) {
                                    if (err) {
                                        return console.log(err);
                                    } else {
                                        return res.header('x-auth-token', token).status(200).json({
                                            message: "successfully logged in",
                                            token: token
                                        });
                                    }
                                }));

                            case 10:
                                return _context2.abrupt('return', res.status(401).json({
                                    message: 'there was an error logging in'
                                }));

                            case 13:
                                _context2.prev = 13;
                                _context2.t0 = _context2['catch'](1);

                                res.status(401).json({
                                    message: 'error logging in'
                                });

                            case 16:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[1, 13]]);
            }));

            function login(_x3, _x4) {
                return _ref2.apply(this, arguments);
            }

            return login;
        }()
        // this is to get all parcels created by a user

    }, {
        key: 'getAllParcelsByUser',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
                var uid, response;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                uid = req.params.uid;
                                _context3.prev = 1;
                                _context3.next = 4;
                                return _userManager2.default.getAllUsersParcelOrder(uid);

                            case 4:
                                response = _context3.sent;

                                console.log('response', response);
                                return _context3.abrupt('return', res.status(200).json({
                                    message: 'successfully got all user parcels',
                                    respon: response.rows,
                                    totalNumOfParcels: response.rowCount
                                }));

                            case 9:
                                _context3.prev = 9;
                                _context3.t0 = _context3['catch'](1);

                                console.log(_context3.t0);
                                return _context3.abrupt('return', res.status(400).json({
                                    message: 'could not get parcels',
                                    e: _context3.t0
                                }));

                            case 13:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[1, 9]]);
            }));

            function getAllParcelsByUser(_x5, _x6) {
                return _ref3.apply(this, arguments);
            }

            return getAllParcelsByUser;
        }()
        // this is to get all users

    }, {
        key: 'getAllUsers',
        value: function getAllUsers(req, res) {
            return res.json({
                allUsers: _usersdb2.default
            });
        }
        // this is to change the destination of a parcel order

    }, {
        key: 'updateParcelDestination',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
                var newdestination, _req$params, pid, uid, response;

                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                newdestination = req.body.newdestination;
                                _req$params = req.params, pid = _req$params.pid, uid = _req$params.uid;
                                _context4.prev = 2;
                                _context4.next = 5;
                                return _userManager2.default.changeParcelDestination(newdestination, pid, uid);

                            case 5:
                                response = _context4.sent;

                                console.log(response);
                                return _context4.abrupt('return', res.status(200).json({
                                    message: "parcel destination was updated successfully"
                                }));

                            case 10:
                                _context4.prev = 10;
                                _context4.t0 = _context4['catch'](2);

                                console.log(_context4.t0);
                                return _context4.abrupt('return', res.status(400).json({
                                    message: "this parcel destination was not updated successfully"
                                }));

                            case 14:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this, [[2, 10]]);
            }));

            function updateParcelDestination(_x7, _x8) {
                return _ref4.apply(this, arguments);
            }

            return updateParcelDestination;
        }()
    }]);

    return usersControllers;
}();

exports.default = usersControllers;
//# sourceMappingURL=usersControllers.js.map