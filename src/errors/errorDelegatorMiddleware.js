import AppError from './AppError.js'; // Adjust the import path as needed
import handleErrors from './utils/errorHandlers.js'
import errorManagement from './utils/errorMangement.js';
const errorDelegatorMiddleware =  (error,req, res, next) => {
    if (error instanceof AppError) {
      next(error);
    } else if (err instanceof Error) {
      handleErrors(error,next)
    } else {
      // Handle other unknown errors here
      next(new AppError('Unknown error', errorManagement.commonErrors.internalServerError.code, false));
    }
};

export default errorDelegatorMiddleware;
