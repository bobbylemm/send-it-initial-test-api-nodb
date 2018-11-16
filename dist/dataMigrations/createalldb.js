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

var usersTable = '\nCREATE TABLE IF NOT EXISTS users(\n    userId SERIAL NOT NULL PRIMARY KEY,\n    userName varchar(10) UNIQUE NOT NULL,\n    email varchar(100) UNIQUE NOT NULL,\n    password text NOT NULL,\n    createdat TIMESTAMP NOT NULL DEFAULT NOW()\n);';
var parcelsTable = '\nCREATE TABLE IF NOT EXISTS parcels(\n    parcelId SERIAL NOT NULL PRIMARY KEY,\n    packageName varchar(10) NOT NULL,\n    destination text NOT NULL,\n    pickupLocation text NOT NULL,\n    price INTEGER NOT NULL,\n    userId INTEGER REFERENCES users(userId) ON DELETE CASCADE,\n    userName varchar(10) REFERENCES users(userName) ON DELETE CASCADE,\n    createdat TIMESTAMP NOT NULL DEFAULT NOW(),\n    updatedat TIMESTAMP NOT NULL DEFAULT NOW()\n);';

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
//# sourceMappingURL=createalldb.js.map