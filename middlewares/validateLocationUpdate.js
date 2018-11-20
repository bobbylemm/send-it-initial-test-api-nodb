import helpers from '../helpers/handleError';

const validateLocationUpdate = (req, res, next) => {
    let { newLocation } = req.body;
    if (!newLocation) {
        return next(helpers.handleError('please input valid new location'))
    }
    return next();
}
export default validateLocationUpdate;