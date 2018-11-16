import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';
import allUsers from '../database/usersdb';
const { expect } = chai;

chai.use(chaiHttp);

describe("get/parcels", () => {
    describe("get/parcels/:id", () => {
        describe("put/parcels/:id", () => {
            describe("delete/parcels/:id", () => {
                describe("post/parcels", () => {
                    describe("post/register", () => {
                        it("it should get all parcel orders", (done) => {
                            chai.request(app).get("/api/v1/parcels").end((req, res) => {
                                expect(res.status).to.equal(200);
                                expect(res.body).to.be.an('object');
                                expect(res.body.parcels).to.be.an('array');
                                done();
                            })
                        })
                        // 
                        it('should get a specific parcel order', (done) => {
                            const id = 1;
                            chai.request(app).get(`/api/v1/parcels/${id}`).end((err, res) => {
                                expect(res.status).to.equal(200);
                                expect(res.body).to.be.an('object');
                                expect(res.body.message).to.equal("the parcel was found");
                                done();
                            })
                        })
                        // for the put request
                        it('should update the status of a parcel order', (done) => {
                            const id = 1;
                            chai.request(app)
                            .put(`/api/v1/parcels/${id}`)
                            .end((err, res) => {
                                expect(res.status).to.equal(200);
                                done();
                            })
                        })
                        // this is the test for the delete end-point
                        it('should delete a parcel order', (done) => {
                            const id = 1;
                            chai.request(app)
                            .delete(`/api/v1/parcels/${id}`)
                            .end((err, res) => {
                                expect(res.status).to.equal(200);
                                done();
                            })
                        }),
                        it('should not create a parcel order if not logged in', (done) => {
                            let user1 = allUsers[0]
                            chai.request(app)
                            .post('/api/v1/parcels')
                            .set('content-type','application/json')
                            .send({
                                packageName: "fridge",
                                destination: "lagos",
                                pickupLocation: "iyana ipaja",
                                status: "enroute",
                                price: "45000 naira"
                            })
                            .end((err, res) => {
                                expect(res.status).to.equal(400);
                                expect(res.body.message).to.equal('could not add new parcel')
                                done();
                            })
                        })
                        it('should register a new user', (done) => {
                            chai.request(app)
                            .post('/api/v1/register')
                            .set('content-type', 'application/json')
                            .send({
                                email: 'dodo@gmail.com',
                                username: 'dodo',
                                password: 'dodosecret'
                            })
                            .end((err, res) => {
                                expect(res.status).to.equal(200);
                                expect(res.body.message).to.equal('you have been successfully registered');
                                done();
                            })
                        })
                    })
                })
            })
        })
    })
})