
class UserManager {
    constructor(db) {
        this.db = db;
    }
    async registerUser(username, email, password) {
        try {
            let res = await this.db.registerNewUser(username, email, password);
           return res;
        }catch(error) {
            console.log('user manager error', error)
        }
    }
    // this is to login a user
    async loginUser(email, password) {
        try {
            let res = await this.database.loginExistingUser(email, password);
            return res;
        }catch(e) {
            return e;
        }
    }
    // this is to check for a user
    async checkUser(email) {
        try {
            let response = await this.database.selectUserId(email);
            return response;
        }catch(e) {
            return e;
        }
    }
    // this is to get all parcels
    async getAllParcels() {
        try {
            let res = await this.database.getAllParcels();
            console.log(res)
        }catch(e) {
            console.log(e)
        }
    }
    // this is to get all parcels created by a specific user
    async getAllUsersParcelOrder(userId) {
        try {
            const res = await this.database.getAllUserParcels(userId);
            // console.log('res',res);
            return res;
        }catch(e) {
            console.log(e)
            return e
        }
    }
    // this is to change the destination of a parcel order
    async changeParcelDestination(newdestination, parcelId, userId) {
        try {
            let res = await this.database.updateParcelDestination(newdestination, parcelId, userId);
            console.log(res);
        }catch(e) {
            console.log(e)
        }
    }
}
export default UserManager;