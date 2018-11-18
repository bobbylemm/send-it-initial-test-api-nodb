import db from '../dbManager/dbManager';
import helpers from '../helpers/handleError';

class UserManager {
    static async registerUser(username, email, password) {
        try {
            let res = await db.registerNewUser(username, email, password);
           return res;
        }catch(error) {
            console.log('user manager error', error)
        }
    }
    // this is to login a user
    static async loginUser(email, password) {
        try {
            let res = await db.loginExistingUser(email, password);
            return res;
        }catch(e) {
            return e;
        }
    }
    // this is to check for a user
    static async checkUser(email) {
        try {
            let response = await db.selectUserId(email);
            return response;
        }catch(e) {
            return e;
        }
    }
    // this is to get all parcels
    static async getAllParcels() {
        try {
            let res = await db.getAllParcels();
            console.log(res)
        }catch(e) {
            console.log(e)
        }
    }
    // this is to get all parcels created by a specific user
    static async getAllUsersParcelOrder(userId) {
        try {
            const res = await db.getAllUserParcels(userId);
            // console.log('res',res);
            return res;
        }catch(e) {
            console.log(e)
            return e
        }
    }
    // this is to change the destination of a parcel order
    static async changeParcelDestination(newdestination, parcelId, userId) {
        try {
            let res = await db.updateParcelDestination(newdestination, parcelId, userId);
            console.log(res);
        }catch(e) {
            console.log(e)
        }
    }
}
export default UserManager;