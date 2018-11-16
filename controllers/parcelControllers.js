import allParcels from '../database/parceldb';
import allUsers from '../database/usersdb';
import helper from '../helpers/findUsers';
import parcelManager from './parcelsManager';


class parcelController {
    // this is to get all parcels
    static async getAllParcels (req, res) {
        try {
        let response = await parcelManager.getAllParcels();
         res.status(200).json({
                message: "there was success",
                response
            })
        }catch (e) {
            res.status(400).json({
                message: "error in retrieving",
                e
            })
            console.log(e)
        }
    }

    // this is to post a particular question
    static async createNewParcel(req, res) {
        const { packageName, destination, pickupLocation, price, userId, username } = req.body;
        try {
            const response = await parcelManager.addNewParcel(packageName, destination, pickupLocation, price, userId, username);
            res.status(200).json({
                message: 'new parcel created',
                resp: response
            })
            console.log(resp)
        }catch(e) {
            res.status(400).json({
                message: "parcel could not be added",
            })
            console.log(e)
        }
        // let newId = allParcels[allParcels.length - 1].id + 1;
        // const packageName = req.body.packageName, destination = req.body.destination, pickupLocation = req.body.pickupLocation, price = req.body.price;
        // const newParcel = {
        //     id: newId,
        //     packageName,
        //     destination,
        //     pickupLocation,
        //     price,
        //     status: ""
        // };
        // const currentUser = helper.findUsers(allUsers, 'loggedIn', true);
        // if (currentUser && newParcel) {
        //     currentUser.parcels.push(newParcel);
        //     allParcels.push(newParcel)
        //     return res.status(200).json({
        //         message: "new parcel created"
        //     })
        // }else {
        //     return res.status(400).json({
        //         message: "could not add new parcel"
        //     })
        // }
    }
    // this is to get a specific parcel form a specific user
    static async getParcelsByUser(req, res) {
        const { userId } = req.body;
        try {
            let response = await parcelManager.getAllUsersParcelOrder(userId);
            res.status(200).json({
                message: 'got all this users parcels',
                response
            })
            console.log(response)
        }catch(e) {
            console.log(e)
        }
        // parManager.getAllUsersParcelOrder(userId, (err, res) => {
        //     const allUsersParcels = res;
        //     if (err) {
        //         return res.status(400).json({
        //             message: 'there was an error in trying to retrieve users parcels'
        //         })
        //     }else {
        //         return res.status(200).json({
        //             message: 'successfully fetched all user parcel',
        //             parcels: res
        //         })
        //     }
        // })
    }

    // this is to get a specific parcel
    static getSpecificParcel (req, res) {
        let parcelId = req.params.id;
        // const findParcel = helper.findUsers(allParcels, 'id', parcelId);
        // if (findParcel) {
        //     return res.status(200).json({
        //         message: "the parcel was found",
        //         parcel: findParcel
        //     })
        // }else {
        //     return res.status(400).json({
        //         message: "sorry the parcel was not found"
        //     })
        // }
    }
    // this is to update a parcel order status
    static updateParcelStatus (req, res) {
        let parcelId = req.params.id;
        const findParcel = helper.findUsers(allParcels, 'id', parcelId);
        if (findParcel) {
            const newStatus = req.body.newStatus;
            res.status(200).json({
                message: "parcel updated successfully"
            })
            return findParcel.status = newStatus
        }else {
           return res.status(400).json({
                message: "could not update parcel order"
            })
        }
    }
    
    // this is to delete a specific parcel
    static deleteSpecificParcel (req, res) {
        let parcelId = req.params.id;
        const findParcel = helper.findUsers(allParcels, 'id', parcelId);
        if (findParcel) {
            const allCurrentParcels = allParcels.filter(parcel => {
                return parcel !== findParcel
            })
            res.status(200).json({
                message: "parcel successfully deleted",
                allparcel: allCurrentParcels
            })
        }else {
            return res.status(400).json({
                message: "could not delete the parcel"
            })
        }
    }
    
}
export default parcelController;