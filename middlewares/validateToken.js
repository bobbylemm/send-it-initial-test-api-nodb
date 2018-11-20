import helpers from '../helpers/handleError';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import userManager from '../controllers/userManager';

dotenv.config();

const validateToken = (req, res, next) => {
    const token = req.headers['x-auth-token'];
    if (token == 'undefined' || !token) {
        console.log(token)
        return res.status(403).json({
            error: 'there was an error no token provided'
        })
    }
        jwt.verify(token, process.env.SECRET_KEY, (err, authData) => {
            console.log('token',token)
            if (err) {
                console.log('token error',err)
                return res.status(403).json('there was error with your authorization');
            }else {
                console.log('the authdata', authData.user.email);
                return req.user = authData;
                // const userEmail = authData.user.email;
                // const check = userManager.checkUser(userEmail);
                // // console.log('check',check)
                // return check.then(response => {
                //     if (response.rowCount < 1) {
                //          return res.status(403).json({
                //              message: 'this user does not exist'
                //          })
                //     }
                // }).catch(e => {
                //     console.log('check error',e)
                // })
            }
        });
    next();
}
export default validateToken;