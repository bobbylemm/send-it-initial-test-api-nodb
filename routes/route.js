import express from 'express';
import parcelController from '../controllers/databaseController';
import allParcels from '../database/databaseConfig';

const router = express.Router();
// this is the route to get all parcels
// GET ALL PARCELS
router.get('/', parcelController.getAllParcels)
// this is the route for creating parcels
// CREATE PARCELS
router.post('/', parcelController.createNewParcel)
// this is the route to get a specific parcel
// GET A SPECIFIC PARCEL
router.get('/:id', parcelController.getSpecificParcel)
// this is to update the status of an existing parcel order
// PUT A STATUS UPDATE
router.put('/:id', parcelController.updateParcelStatus)
// this is to delete a specific parcel
// DELETE A SPECIFIC ROUTE
router.delete('/:id', parcelController.deleteSpecificParcel)

export default router;