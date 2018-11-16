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

describe("get/parcels", function () {
    describe("get/parcels/:id", function () {
        describe("put/parcels/:id", function () {
            describe("delete/parcels/:id", function () {
                describe("post/parcels", function () {
                    describe("post/register", function () {
                        it("it should get all parcel orders", function (done) {
                            _chai2.default.request(_app2.default).get("/api/v1/parcels").end(function (req, res) {
                                expect(res.status).to.equal(200);
                                expect(res.body).to.be.an('object');
                                expect(res.body.parcels).to.be.an('array');
                                done();
                            });
                        });
                        // 
                        it('should get a specific parcel order', function (done) {
                            var id = 1;
                            _chai2.default.request(_app2.default).get('/api/v1/parcels/' + id).end(function (err, res) {
                                expect(res.status).to.equal(200);
                                expect(res.body).to.be.an('object');
                                expect(res.body.message).to.equal("the parcel was found");
                                done();
                            });
                        });
                        // for the put request
                        it('should update the status of a parcel order', function (done) {
                            var id = 1;
                            _chai2.default.request(_app2.default).put('/api/v1/parcels/' + id).end(function (err, res) {
                                expect(res.status).to.equal(200);
                                done();
                            });
                        });
                        // this is the test for the delete end-point
                        it('should delete a parcel order', function (done) {
                            var id = 1;
                            _chai2.default.request(_app2.default).delete('/api/v1/parcels/' + id).end(function (err, res) {
                                expect(res.status).to.equal(200);
                                done();
                            });
                        }), it('should not create a parcel order if not logged in', function (done) {
                            var user1 = _usersdb2.default[0];
                            _chai2.default.request(_app2.default).post('/api/v1/parcels').set('content-type', 'application/json').send({
                                packageName: "fridge",
                                destination: "lagos",
                                pickupLocation: "iyana ipaja",
                                status: "enroute",
                                price: "45000 naira"
                            }).end(function (err, res) {
                                expect(res.status).to.equal(400);
                                expect(res.body.message).to.equal('could not add new parcel');
                                done();
                            });
                        });
                        it('should register a new user', function (done) {
                            _chai2.default.request(_app2.default).post('/api/v1/register').set('content-type', 'application/json').send({
                                email: 'dodo@gmail.com',
                                username: 'dodo',
                                password: 'dodosecret'
                            }).end(function (err, res) {
                                expect(res.status).to.equal(200);
                                expect(res.body.message).to.equal('you have been successfully registered');
                                done();
                            });
                        });
                    });
                });
            });
        });
    });
});
//# sourceMappingURL=test.test.js.map