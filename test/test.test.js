import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';

chai.use(chaiHttp);
chai.should();

describe("get/parcels", () => {
    describe("get/parcels/:id", () => {
        describe("put/parcels/:id", () => {
            describe("delete/parcels/:id", () => {
                it("it should get all parcel orders", (done) => {
                    chai.request(app).get("/parcels").end((req, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        done();
                    })
                })
                // 
                it('should get a specific parcel order', (done) => {
                    const id = 1;
                    chai.request(app).get(`/parcels/${id}`).end((req, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        done();
                    })
                })
                // for the put request
                it('should update the status of a parcel order', (done) => {
                    const id = 1;
                    chai.request(app)
                    .put(`/parcels/${id}`)
                    .end((err, res) => {
                        res.should.have.status(200);
                        done();
                    })
                })
                // this is the test for the delete end-point
                it('should delete a parcel order', (done) => {
                    const id = 1;
                    chai.request(app)
                    .delete(`/parcels/${id}`)
                    .end((err, res) => {
                        res.should.have.status(200);
                        done();
                    })
                })
            })
        })
    })
})