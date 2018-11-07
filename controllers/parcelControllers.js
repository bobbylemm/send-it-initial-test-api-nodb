import allParcels from '../database/parceldb';
import allUsers from '../database/usersdb';
import helper from '../helpers/findUsers';

class parcelController {
    // this is to get all parcels
    static getAllParcels (req, res) {
        return res.json({
            response: "you have sent me a get request to get all questions",
            parcels: allParcels
        })
    }

    // this is to post a particular question
    static createNewParcel (req, res) {
        let newId = allParcels[allParcels.length - 1].id + 1;
        const packageName = req.body.packageName, destination = req.body.destination, pickupLocation = req.body.pickupLocation, price = req.body.price;
        const newParcel = {
            id: newId,
            packageName,
            destination,
            pickupLocation,
            price,
            status: ""
        };
        const currentUser = helper.findUsers(allUsers, 'loggedIn', true);
        if (currentUser && newParcel) {
            currentUser.parcels.push(newParcel);
            allParcels.push(newParcel)
            return res.status(200).json({
                message: "new parcel created"
            })
        }else {
            return res.status(400).json({
                message: "could not add new parcel"
            })
        }
    }

    // this is to get a specific parcel
    static getSpecificParcel (req, res) {
        let parcelId = req.params.id;
        const findParcel = helper.findUsers(allParcels, 'id', parcelId);
        if (findParcel) {
            return res.status(200).json({
                message: "the parcel was found",
                parcel: findParcel
            })
        }else {
            return res.status(400).json({
                message: "sorry the parcel was not found"
            })
        }
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