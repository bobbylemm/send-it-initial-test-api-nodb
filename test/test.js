import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';

chai.use(chaiHttp);
chai.should();

describe("PARCELS", () => {
    describe("get /", () => {
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
    })
})