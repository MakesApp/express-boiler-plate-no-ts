import { isCelebrateError } from 'celebrate';
import AppError from '../AppError.js';
import errorManagement from './errorMangement.js';


const handleErrors = (error, next) => {
  // Handle celebrate errors
  if (isCelebrateError(error)) {
    next(new AppError(errorManagement.commonErrors.validationError.message, errorManagement.commonErrors.validationError.code))
  }

  // Handle Mongoose CastErrors
  if (error.name === 'CastError') {
    next(new AppError(errorManagement.commonErrors.castError.message, errorManagement.commonErrors.castError.code))
  }

  // Handle other specific errors here...

  // If no specific handling, return false
  next(new AppError(error.message, errorManagement.commonErrors.internalServerError.code, false));
};

export default handleErrors;
