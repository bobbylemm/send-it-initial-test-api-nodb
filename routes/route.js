import express from 'express';
import parcelController from '../controllers/parcelControllers';
import usersControllers from '../controllers/usersControllers';

const router = express.Router();
// this is the route to get all parcels
// GET ALL PARCELS
router.get('/parcels', parcelController.getAllParcels)
// this is the route for creating parcels
// CREATE PARCELS
router.post('/parcels', parcelController.createNewParcel)
// this is the route to get a specific parcel
// GET A SPECIFIC PARCEL
router.get('/parcels/:id', parcelController.getSpecificParcel)
// this is to update the status of an existing parcel order
// PUT A STATUS UPDATE
router.put('/parcels/:id', parcelController.updateParcelStatus)
// this is to delete a specific parcel
// DELETE A SPECIFIC ROUTE
router.delete('/parcels/:id', parcelController.deleteSpecificParcel)

// this is to get all users 
// GET ALL USERS
router.get('/users', usersControllers.getAllUsers)
// fetch all parcels for a given user
// GET ALL PARCELS FOR A GIVEN USER
router.get('/users/:id/parcels', usersControllers.getAllParcelsByUser)
// this to register a new user
// POST A NEW USER
router.post('/register', usersControllers.registerUser)
// this is to login in an existing user// this is to get all users 
router.post('/login', usersControllers.login)

export default router;