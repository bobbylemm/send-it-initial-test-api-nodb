import jwt from 'jsonwebtoken';
import allUsers from '../database/usersdb';
import helper from '../helpers/findUsers';
import UserManager from './userManager';
import dotenv from 'dotenv';
import DbManger from '../dbManager/dbManager';

dotenv.config();
const db = new DbManger();
const usermanager = new UserManager(db);

class usersControllers {
    static async registerUser (req, res) {
       const { userName, Email, password } = req.body;
        try {
            const response = await usermanager.registerUser(userName, Email, password);
            console.log('user controller reponse', response);  
            if (response.status !== 400) {
                const { user_id, email, username } = response.rows[0]; 
                const user = {user_id, email, username};
                return jwt.sign({user}, process.env.SECRET_KEY, (err, token) => {
                    if (err) {
                    return console.log(err)
                    }else {
                    return res.header('x-auth-token', token).status(200).json({
                        message: "successfully registered user",
                        token
                    })
                   }
                });
            }
            return res.status(401).json({
                message: 'unable to register user'
            })
        }catch(error) {
            res.status(401).json({
                message: 'unable to create user',
            })
            console.log('user controller error', error);
        }
    }
    // this is to login a user
    static async login (req, res) {
        const { Email, password } = req.body;
        try {
            const response = await usermanager.loginUser(Email, password);
            console.log('LOGIN CONTROLLER response', response);
            if (response.rows[0] !== undefined) {
                const { user_id, email, username } = response.rows[0]; 
                const user = {user_id, email, username};
                return jwt.sign({user}, process.env.SECRET_KEY, (err, token) => {
                    if (err) {
                    return console.log(err)
                    }else {
                    return res.header('x-auth-token', token).status(200).json({
                        message: "successfully logged in",
                        token
                    })
                   }
                });
            }
            return res.status(401).json({
                message: 'there was an error logging in'
            })
        }catch (e) {
            res.status(401).json({
                message: 'error logging in'
            })
        }
    }
    // this is to get all parcels created by a user
    static async getAllParcelsByUser (req, res) {
        const { uid } = req.params;
        try {
            const response = await usermanager.getAllUsersParcelOrder(uid);
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
            let response = await usermanager.changeParcelDestination(newdestination, pid, uid);
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