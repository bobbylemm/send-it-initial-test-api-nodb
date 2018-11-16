import db from '../dbManager/dbManager';

class ParcelManager {
    static async addNewParcel(packageName, destination, pickupLocation, price, userId, userName) {
        try {
            let resp = await db.insertNewParcel(packageName, destination, pickupLocation, price, userId, userName);
            console.log(resp)
        }catch(e) {
            console.log(e)
        }
    }
    // this is to get all questions
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
            let res = await db.getAllUserParcels(userId);
            console.log(res);
        }catch(e) {
            console.log(e)
        }
    }
    
}
export default ParcelManager;