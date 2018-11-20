import db from '../dbManager/dbManager';

class ParcelManager {
    static async addNewParcel(packageName, pickupLocation, dropOfflocation, presentLocation, weight, price, initialStatus, userId) {
        try {
            let resp = await db.insertNewParcel(packageName, pickupLocation, dropOfflocation, presentLocation, weight, price, initialStatus, userId);
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
    // this is to change the parcel delivery status and this route should be accessible to the admin only
    static async updateParcelStatus(newStatus, parcelId) {
        try {
            let res = await db.updateParcelStatus(newStatus, parcelId);
            return res;
        }catch(e) {
            return e;
        }
    }
    // this is to change the parcel delivery status and this route should be accessible to the admin only
    static async updateParcelPresentlocation(newLocation, parcelId) {
        try {
            let res = await db.updateParcelslocation(newLocation, parcelId);
            return res;
        }catch(e) {
            return e;
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