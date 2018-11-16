import helpers from '../helpers/handleError';

const validateParcels = (req, res, next) => {
    let { packageName, pickupLocation, destination } = req.body;
    if (!packageName || packageName == Number) {
        return next(helpers.handleError('please put in a valid parcel name'))
    }else if (!destination) {
        return next(helpers.handleError('please put in a destination'))
    }else if (!pickupLocation) {
        return next(helpers.handleError('please put in a pickup location'))
    }
    return next();
}
export default validateParcels;