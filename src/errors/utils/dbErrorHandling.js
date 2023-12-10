import AppError from '../AppError.js'; // Update the path as needed
import errorManagement from './errorMangement.js';

export function applyErrorHandlingMiddleware(schema) {
  schema.post('save', (error, doc, next) => {
    if (error) {
      if (error.name === 'ValidationError') {
      next(new AppError(errorManagement.commonErrors.validationError.message, errorManagement.commonErrors.validationError.code, true));
      } else if (error.name === 'MongoError' && error.code === 11000) {
 next(new AppError(errorManagement.commonErrors.duplicateResource.message, errorManagement.commonErrors.duplicateResource.code, true));  
    }
  }
     else {
        next(error);
      }
  
  });
}
