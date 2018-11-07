import allUsers from '../database/usersdb';
import helper from '../helpers/findUsers';

class usersControllers {
    static registerUser (req, res) {
        let userEmail = req.body.email, userName = req.body.username, password = req.body.password;
        let newId = allUsers[allUsers.length - 1].id + 1;
        const checkUser = helper.findUsers(allUsers, 'email', userEmail);
        if (!checkUser) {
            let newUser = {
                id: newId,
                email: userEmail,
                username: userName,
                password: password,
                parcels: []
            };
            allUsers.push(newUser);
            return res.status(200).json({
                message: "you have been successfully registered"
            })
        }else {
            return res.status(400).json({
                message: "you are already registered"
            })
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
    static getAllParcelsByUser (req, res) {
        let userId = req.params.id;
        const findUser = helper.findUsers(allUsers, 'id', userId);
        if (findUser) {
            res.json({
                user: findUser
            })
        }else {
            res.json({
                error: "there is an error"
            })
        }
    }
    // this is to get all users
    static getAllUsers (req, res) {
        return res.json({
            allUsers: allUsers
        })
    }
}

export default usersControllers;