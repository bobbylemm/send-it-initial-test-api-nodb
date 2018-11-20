import validateRegister from '../middlewares/validateRegister';
import validateLogin from '../middlewares/validateLogin';
import validateParcels from '../middlewares/validateParcels';
import validateToken from '../middlewares/validateToken';
import validateAdmin from '../middlewares/validateAdmin';
import validateParcelStatusUpdate from '../middlewares/validateParcelStatusUpdate';
import validateLocationUpdate from '../middlewares/validateLocationUpdate'

const Middlewares = {
    validateLogin,
    validateRegister,
    validateParcels,
    validateToken,
    validateAdmin,
    validateParcelStatusUpdate,
    validateLocationUpdate
}
export default Middlewares;