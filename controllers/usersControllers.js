import allUsers from '../database/usersdb';
import helper from '../helpers/findUsers';
import userrManager from './userManager';


class usersControllers {
    static async registerUser (req, res) {
       const { username, email, password } = req.body;
        try {
            const resp = userrManager.registerUser(username, email, password);
            res.status(200).json({
                message: "new user created",
            })
            console.log(resp);
        }catch(e) {
            res.status(400).json({
                message: 'unable to create user',
            })
            console.log(e);
        }
    }
    // this is to login a user
    static login (req, res) {
        let userEmail = req.body.email, password = req.body.password;
        const findUser = helper.findUsers(allUsers, 'email', userEmail);
        if (findUser) {
            findUser.loggedIn = true;
            return res.status(200).json({
                message: "successfully logged in",
                currentUser: findUser
            })
        }else {
            return res.status(400).json({
                message: "error logging in"
            })
        }
    }
    // this is to get all parcels created by a user
    static async getAllParcelsByUser (req, res) {
        const { uid } = req.params;
        try {
            const response = await userrManager.getAllUsersParcelOrder(uid);
            console.log('response',response);
            return res.status(200).json({
                message: 'successfully got all user parcels',
                respon: response.rows,
                totalNumOfParcels: response.rowCount
            })     
        }catch(e) {
            console.log(e);
            return res.status(400).json({
                message: 'could not get parcels',
                e
            })
        }
    }
    // this is to get all users
    static getAllUsers (req, res) {
        return res.json({
            allUsers: allUsers
        })
    }
    // this is to change the destination of a parcel order
    static async updateParcelDestination (req, res) {
        const { newdestination } = req.body;
        const { pid, uid } = req.params;
        try {
            let response = await userrManager.changeParcelDestination(newdestination, pid, uid);
            console.log(response);
            return res.status(200).json({
                message: "parcel destination was updated successfully"
            })
        }catch(e) {
            console.log(e);
            return res.status(400).json({
                message: "this parcel destination was not updated successfully",
            })
        }
    }
}

export default usersControllers;