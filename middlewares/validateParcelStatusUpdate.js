import helpers from '../helpers/handleError';

const validateStatusUpdate = (req, res, next) => {
    let { newStatus } = req.body;
    if (!newStatus) {
        return next(helpers.handleError('please input valid new status'))
    }
    return next();
}
export default validateStatusUpdate;