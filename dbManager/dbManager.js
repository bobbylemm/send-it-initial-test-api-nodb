import { Pool } from 'pg';
import dotenv from 'dotenv';
import config from '../config/databaseConfiguration';

dotenv.config();
// const pool = new pg.Pool(config.development);
const pool = new Pool(config.development);

class DbManager {
  static async insertNewParcel(packageName, destination, pickupLocation, price, userId, userName) {
        try {
            const q = 'INSERT INTO parcels (packagename, destination, pickupLocation, price, userId, userName) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
            let response = await pool.query(q, [packageName, destination, pickupLocation, price, userId, userName]);
            console.log(response);
        }catch(e) {
            console.error(e)
        }
    }
    // get all parcels
    static async getAllParcels() {
        try {
            const q = 'SELECT packageName, destination, pickupLocation, price FROM parcels;';
            let response = await pool.query(q);
            console.log(response);
        }catch(e) {
            console.error(e)
        }
    }
    // get all parcels by a speciific user
    static async getAllUserParcels(userId) {
        try {
            const q = 'SELECT packageName, destination, pickupLocation, price, userName FROM parcels WHERE userId = $1';
            let response = await pool.query(q, [userId]);
            console.log(response.rowCount);
            return response
        }catch(e) {
            console.error(e);
            return e;
        }
    }
    // this is to register a new user
    static async registerNewUser(userName, email, password) {
        try {
            const q = 'INSERT INTO users(userName, email, password) VALUES($1, $2, $3);';
            let response = await pool.query(q, [userName, email, password]);
            console.log(response);
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

}
export default DbManager;