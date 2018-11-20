'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _app = require('../src/app');

var _app2 = _interopRequireDefault(_app);

var _usersdb = require('../database/usersdb');

var _usersdb2 = _interopRequireDefault(_usersdb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;


_chai2.default.use(_chaiHttp2.default);
describe("post/register", function () {
    it('should register a new user', function (done) {
        _chai2.default.request(_app2.default).post('/api/v1/register').set('content-type', 'application/json').send({
            Email: 'dodo@gmail.com',
            userName: 'dodo',
            password: 'dodosecret'
        }).end(function (err, res) {
            expect(res.status).to.equal(200);
            expect(res.body.message).to.equal('successfully registered user');
            done();
        });
    });
});
//# sourceMappingURL=test.test.js.map