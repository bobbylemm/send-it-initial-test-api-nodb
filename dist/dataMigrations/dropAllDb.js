'use strict';

var _databaseConfiguration = require('../config/databaseConfiguration');

var _databaseConfiguration2 = _interopRequireDefault(_databaseConfiguration);

var _pg = require('pg');

var _pg2 = _interopRequireDefault(_pg);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();
var pool = new _pg2.default.Pool(_databaseConfiguration2.default.development);

var parcelsTable = 'DROP TABLE IF EXISTS parcels';
var usersTable = 'DROP TABLE IF EXISTS users';

pool.query(usersTable).then(function (res) {
  return console.log(res);
}).catch(function (err) {
  return console.log(err);
});
pool.query(parcelsTable).then(function (res) {
  return console.log(res);
}).catch(function (err) {
  return console.log(err);
});
//# sourceMappingURL=dropAllDb.js.map