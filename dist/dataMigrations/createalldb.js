'use strict';

var _databaseConfiguration = require('../config/databaseConfiguration');

var _databaseConfiguration2 = _interopRequireDefault(_databaseConfiguration);

var _pg = require('pg');

var _pg2 = _interopRequireDefault(_pg);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// psql -U dozic -h127.0.0.1 senditdb

_dotenv2.default.config();
var pool = new _pg2.default.Pool(_databaseConfiguration2.default.development);

var usersTable = '\nDROP TABLE IF EXISTS users CASCADE;\nCREATE TABLE IF NOT EXISTS users(\n    user_id SERIAL NOT NULL PRIMARY KEY,\n    username varchar(10) UNIQUE NOT NULL,\n    email varchar(100) UNIQUE NOT NULL,\n    password text NOT NULL,\n    createdat TIMESTAMP NOT NULL DEFAULT NOW()\n);';
var parcelsTable = '\nDROP TABLE IF EXISTS parcels CASCADE;\nCREATE TABLE IF NOT EXISTS parcels(\n    parcel_id SERIAL NOT NULL PRIMARY KEY,\n    packagename varchar(10) NOT NULL,\n    pickuplocation varchar(25) NOT NULL,\n    dropofflocation varchar(25) NOT NULL,\n    presentlocation text NOT NULL,\n    weight SMALLINT NOT NULL,\n    price INTEGER NOT NULL,\n    status varchar(10) NOT NULL,\n    user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,\n    createdat TIMESTAMP NOT NULL DEFAULT NOW(),\n    updatedat TIMESTAMP NOT NULL DEFAULT NOW()\n);';

pool.query(usersTable).then(function (res) {
    return console.log(res);
});
pool.query(parcelsTable).then(function (res) {
    return console.log(res);
}).catch(function (err) {
    return console.log(err);
}).catch(function (err) {
    return console.log(err);
});
//# sourceMappingURL=createalldb.js.map