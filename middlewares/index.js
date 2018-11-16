import validateRegister from '../middlewares/validateRegister';
import validateLogin from '../middlewares/validateLogin';
import validateParcels from '../middlewares/validateParcels';

const Middlewares = {
    validateLogin,
    validateRegister,
    validateParcels
}
export default Middlewares;