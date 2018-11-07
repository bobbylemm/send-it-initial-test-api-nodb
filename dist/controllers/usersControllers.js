'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _usersdb = require('../database/usersdb');

var _usersdb2 = _interopRequireDefault(_usersdb);

var _findUsers = require('../helpers/findUsers');

var _findUsers2 = _interopRequireDefault(_findUsers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var usersControllers = function () {
    function usersControllers() {
        _classCallCheck(this, usersControllers);
    }

    _createClass(usersControllers, null, [{
        key: 'registerUser',
        value: function registerUser(req, res) {
            var userEmail = req.body.email,
                userName = req.body.username,
                password = req.body.password;
            var newId = _usersdb2.default[_usersdb2.default.length - 1].id + 1;
            var checkUser = _usersdb2.default.find(function (user) {
                return user.email == userEmail;
            });
            if (!checkUser) {
                var newUser = {
                    id: newId,
                    email: userEmail,
                    username: userName,
                    password: password,
                    parcels: []
                };
                _usersdb2.default.push(newUser);
                return res.status(200).json({
                    message: "you have been successfully registered"
                });
            } else {
                return res.status(400).json({
                    message: "you are already registered"
                });
            }
        }
        // this is to login a user

    }, {
        key: 'login',
        value: function login(req, res) {
            var userEmail = req.body.email,
                password = req.body.password;
            var findUser = (0, _findUsers2.default)(_usersdb2.default, 'email', userEmail);
            if (findUser) {
                findUser.loggedIn = true;
                return res.status(200).json({
                    message: "successfully logged in",
                    currentUser: findUser
                });
            } else {
                return res.status(400).json({
                    message: "error logging in"
                });
            }
        }
        // this is to get all parcels created by a user

    }, {
        key: 'getAllParcelsByUser',
        value: function getAllParcelsByUser(req, res) {
            var userId = req.params.id;
        }
        // this is to get all users

    }, {
        key: 'getAllUsers',
        value: function getAllUsers(req, res) {
            return res.json({
                allUsers: _usersdb2.default
            });
        }
    }]);

    return usersControllers;
}();

exports.default = usersControllers;
//# sourceMappingURL=usersControllers.js.map