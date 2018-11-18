import { Pool } from 'pg';
import dotenv from 'dotenv';
import config from '../config/databaseConfiguration';

dotenv.config();
// const pool = new pg.Pool(config.development);
const pool = new Pool(config.development);

class DbManager {
  static async insertNewParcel(packageName, pickupLocation, dropOfflocation, presentLocation, weight, price, initialStatus, userId) {
        try {
            const q = 'INSERT INTO parcels (packagename, pickuplocation, dropofflocation, presentlocation, weight, price, status, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
            let response = await pool.query(q, [packageName, pickupLocation, dropOfflocation, presentLocation, weight, price, initialStatus, userId]);
            console.log(response);
        }catch(e) {
            console.error(e)
        }
    }
    // get all parcels
    static async getAllParcels() {
        try {
            const q = 'SELECT packagename, dropofflocation, pickuplocation, price, presentlocation, weight, price, status FROM parcels;';
            let response = await pool.query(q);
            console.log(response);
        }catch(e) {
            console.error(e)
        }
    }
    // get all parcels by a speciific user
    static async getAllUserParcels(userId) {
        try {
            const q = 'SELECT packageName, destination, pickupLocation, price, userName FROM parcels WHERE user_id = $1';
            let response = await pool.query(q, [userId]);
            console.log(response.rowCount);
            return response
        }catch(e) {
            console.error(e);
            return e;
        }
    }
    // select user if the user exists
    static async selectUserId(email) {
        try {
            const q = 'SELECT user_id FROM users WHERE email=$1';
            let response = await pool.query(q, [email]);
            console.log(response);
            return response;
        }catch(e) {
            console.log(e);
            return e;
        }
    }
    // this is to register a new user
    static async registerNewUser(userName, email, password) {
        try {
            const q = 'INSERT INTO users(userName, email, password) VALUES($1, $2, $3) RETURNING *;';
            let response = await pool.query(q, [userName, email, password]);
            console.log(' database response', response);
            return response;
        }catch(error) {
            console.log('error name',error.name)
        }
    }
    // this is to login an existing user
    static async loginExistingUser(email, password) {
        try {
            const q = 'SELECT * FROM users WHERE email=$1 AND password=$2';
            let response = await pool.query(q, [email, password]);
            console.log('login response', response);
            return response;
        }catch(e) {
            console.log(e)
        }
    }
    // this is the route to enable a user to update a parcel destination
    static async updateParcelDestination(newdestination, parcelId, userId) {
        try {
            const q = 'UPDATE parcels SET destination=$1 WHERE parcelid=$2 AND userid=$3 RETURNING *;';
            let response = await pool.query(q, [newdestination, parcelId, userId]);
            console.log(response);
        }catch(e) {
            console.log(e)
        }
    }
    // this is for the admin to change the status of a parcel delivery order and this route should be accessible to admin only
    static async updateParcelStatus(newStatus, parcelId) {
        try {
            const q = 'UPDATE parcels SET status=$1 WHERE parcel_id=$2 RETURNING *;';
            let response = await pool.query(q, [newStatus, parcelId]);
            console.log(response);
        }catch(e) {
            console.log(e)
        }
    }
    // this is for the admin to change the present location of a parcel delivery order and this route should be accessible to admin only
    static async updateParcelslocation(newLocation, parcelId) {
        try {
            const q = 'UPDATE parcels SET presentlocation=$1 WHERE parcel_id=$2 RETURNING *;';
            let response = await pool.query(q, [newLocation, parcelId]);
            console.log(response);
        }catch(e) {
            console.log(e)
        }
    }

}
export default DbManager;