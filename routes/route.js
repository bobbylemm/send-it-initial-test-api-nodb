import express from 'express';
import parcelController from '../controllers/parcelControllers';
import usersControllers from '../controllers/usersControllers';
import middlewares from '../middlewares/index';

const router = express.Router();
// this is the route to get all parcels
// GET ALL PARCELS
router.get('/parcels', parcelController.getAllParcels)
// this is the route for creating parcels
// CREATE PARCELS
router.post('/parcels',middlewares.validateParcels, parcelController.createNewParcel)
// this is the route to get a specific parcel
// GET A SPECIFIC PARCEL
router.get('/parcels/:id', parcelController.getSpecificParcel)
// this is to update the status of an existing parcel order
// PUT A STATUS UPDATE
router.put('/parcels/status/:id', parcelController.updateParcelStatus)
// this is to delete a specific parcel
// DELETE A SPECIFIC ROUTE
router.delete('/parcels/:id/delete', parcelController.deleteSpecificParcel)

// this is to get all users 
// GET ALL USERS
router.get('/users', usersControllers.getAllUsers)
// fetch all parcels for a given user
// GET ALL PARCELS FOR A GIVEN USER
router.get('/users/:uid/parcels', usersControllers.getAllParcelsByUser)
// this is to change the destination of a parcel order 
router.post('/users/:pid/:uid', usersControllers.updateParcelDestination)
// this to register a new user
// POST A NEW USER
router.post('/register',middlewares.validateRegister, usersControllers.registerUser)
// this is to login in an existing user// 
router.post('/login',middlewares.validateLogin, usersControllers.login)

export default router;