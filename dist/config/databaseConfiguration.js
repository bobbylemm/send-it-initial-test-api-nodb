'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var databaseConfig = {
    "development": {
        user: process.env.DATABASE_USER,
        host: process.env.DATABASE_HOST,
        port: '5432',
        database: process.env.DATABASE_NAME,
        password: process.env.DATABASE_PASSWORD,
        max: 10
    },
    "test": {
        connectionString: process.env.DATABASE_URL_TEST
    },
    "production": {
        user: process.env.DATABASE_URL,
        host: process.env.DATABASE_URL,
        port: process.env.DATABASE_URL,
        database: process.env.DATABASE_URL,
        password: process.env.DATABASE_URL
    }
};
exports.default = databaseConfig;
//# sourceMappingURL=databaseConfiguration.js.map