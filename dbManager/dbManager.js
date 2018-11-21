import { Pool } from 'pg';
import dotenv from 'dotenv';
import config from '../config/databaseConfiguration';

dotenv.config();

class DbManager {
    constructor() {
        let configString = '';
        if (process.env.NODE_ENV) {
        if(process.env.NODE_ENV.trim() == 'test') {
        configString = config.test || config.test2;
        }
        if(process.env.NODE_ENV.trim() == 'development') {
         configString = config.development;
        }
    }
    this.pool = new Pool(configString);
    this.createTables();
    }
    createTables() {
    const usersTable = `
    CREATE TABLE IF NOT EXISTS users(
        user_id SERIAL NOT NULL PRIMARY KEY,
        username varchar(10) UNIQUE NOT NULL,
        email varchar(100) UNIQUE NOT NULL,
        password text NOT NULL,
        createdat TIMESTAMP NOT NULL DEFAULT NOW()
    );`;
        const parcelsTable = `
        CREATE TABLE IF NOT EXISTS parcels(
            parcel_id SERIAL NOT NULL PRIMARY KEY,
            packagename varchar(10) NOT NULL,
            pickuplocation varchar(25) NOT NULL,
            dropofflocation varchar(25) NOT NULL,
            presentlocation text NOT NULL,
            weight SMALLINT NOT NULL,
            price INTEGER NOT NULL,
            status varchar(10) NOT NULL,
            user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
            createdat TIMESTAMP NOT NULL DEFAULT NOW(),
            updatedat TIMESTAMP NOT NULL DEFAULT NOW()
        );`;
        this.pool.query(usersTable)
            .then(res => console.log(res))
                this.pool.query(parcelsTable)
                .then(res => console.log(res))
            .catch(err => console.log(err))
        .catch(err => console.log(err));
    }

  async insertNewParcel(packageName, pickupLocation, dropOfflocation, presentLocation, weight, price, initialStatus, userId) {
        try {
            const q = 'INSERT INTO parcels (packagename, pickuplocation, dropofflocation, presentlocation, weight, price, status, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
            let response = await this.pool.query(q, [packageName, pickupLocation, dropOfflocation, presentLocation, weight, price, initialStatus, userId]);
            console.log(response);
        }catch(e) {
            console.error(e)
        }
    }
    // get all parcels
    async getAllParcels() {
        try {
            const q = 'SELECT packagename, dropofflocation, pickuplocation, price, presentlocation, weight, price, status FROM parcels;';
            let response = await this.pool.query(q);
            console.log(response);
        }catch(e) {
            console.error(e)
        }
    }
    // get all parcels by a speciific user
    async getAllUserParcels(userId) {
        try {
            const q = 'SELECT packageName, destination, pickupLocation, price, userName FROM parcels WHERE user_id = $1';
            let response = await this.pool.query(q, [userId]);
            console.log(response.rowCount);
            return response
        }catch(e) {
            console.error(e);
            return e;
        }
    }
    // select user if the user exists
    async selectUserId(email) {
        try {
            const q = 'SELECT user_id FROM users WHERE email=$1';
            let response = await this.pool.query(q, [email]);
            console.log(response);
            return response;
        }catch(e) {
            console.log(e);
            return e;
        }
    }
    // this is to register a new user
    async registerNewUser(userName, email, password) {
        try {
            const q = 'INSERT INTO users(userName, email, password) VALUES($1, $2, $3) RETURNING *;';
            let response = await this.pool.query(q, [userName, email, password]);
            console.log(' database response', response);
            return response;
        }catch(error) {
            console.log('error name',error.name)
        }
    }
    // this is to login an existing user
    async loginExistingUser(email, password) {
        try {
            const q = 'SELECT * FROM users WHERE email=$1 AND password=$2';
            let response = await this.pool.query(q, [email, password]);
            console.log('login response', response);
            return response;
        }catch(e) {
            console.log(e)
        }
    }
    // this is the route to enable a user to update a parcel destination
    async updateParcelDestination(newdestination, parcelId, userId) {
        try {
            const q = 'UPDATE parcels SET destination=$1 WHERE parcelid=$2 AND userid=$3 RETURNING *;';
            let response = await this.pool.query(q, [newdestination, parcelId, userId]);
            console.log(response);
        }catch(e) {
            console.log(e)
        }
    }
    // this is for the admin to change the status of a parcel delivery order and this route should be accessible to admin only
    async updateParcelStatus(newStatus, parcelId) {
        try {
            const q = 'UPDATE parcels SET status=$1 WHERE parcel_id=$2 RETURNING *;';
            let response = await this.pool.query(q, [newStatus, parcelId]);
            console.log(response);
        }catch(e) {
            console.log(e)
        }
    }
    // this is for the admin to change the present location of a parcel delivery order and this route should be accessible to admin only
    async updateParcelslocation(newLocation, parcelId) {
        try {
            const q = 'UPDATE parcels SET presentlocation=$1 WHERE parcel_id=$2 RETURNING *;';
            let response = await this.pool.query(q, [newLocation, parcelId]);
            console.log(response);
        }catch(e) {
            console.log(e)
        }
    }

}
export default DbManager;