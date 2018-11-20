import allParcels from '../database/parceldb';
import allUsers from '../database/usersdb';
import helper from '../helpers/findUsers';
import parcelManager from './parcelsManager';
import mailTransport from '../mailer/sendMaile';


class parcelController {
    // this is to get all parcels
    static async getAllParcels (req, res) {
        console.log('the request object', req.user);
        try {
            let response = await parcelManager.getAllParcels();
            return res.status(200).json({
            message: "there was success",
            response
        })
        }catch (e) {
            return res.status(400).json({
                message: "error in retrieving",
                e
            })
        }
    }

    // this is to post a particular question
    static async createNewParcel(req, res) {
        const userId = req.user.user.user_id;
        const initialStatus = 'processing'
        const { packageName, pickupLocation, dropOfflocation, presentLocation, weight, price } = req.body;
        try {
            const response = await parcelManager.addNewParcel(packageName, pickupLocation, dropOfflocation, presentLocation, weight, price, initialStatus, userId);
            return res.status(200).json({
                message: 'new parcel created',
                resp: response
            })
            console.log(resp)
        }catch(e) {
            return res.status(400).json({
                message: "parcel could not be added",
            });
       }
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
        const parcelId = req.params.pid;
        const { newStatus } = req.body;
        try {
            let response = parcelManager.updateParcelStatus(newStatus, parcelId);
            // let mail = mailTransport.sendMail();
            // mail.then(res => console.log('the response',res)).catch(err => console.log('the error',err));
            return res.status(200).json({
                messsage: 'parcel status was updated successfully'
            })
        }catch(e) {
            return res.status(400).json({
                message: 'could not update the parcel status'
            })
        }
    }
    // this is to update a parcel order present location
    static updateParcelPresentLocation (req, res) {
        const parcelId = req.params.pid;
        const { newLocation } = req.body;
        try {
            let response = parcelManager.updateParcelPresentlocation(newLocation, parcelId);
            return res.status(200).json({
                messsage: 'parcel present location was updated successfully'
            })
        }catch(e) {
            return res.status(400).json({
                message: 'could not update the parcel present location'
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