import AppError from '../AppError.js'; // Update the path as needed

export function applyErrorHandlingMiddleware(schema) {
  schema.post('save', (error, next) => {
    if (error.name === 'ValidationError') {
      next(new AppError('Validation error', 400, true));
    } else if (error.name === 'MongoError' && error.code === 11000) {
      next(new AppError('Duplicate key error', 409, true));
    } else {
      next(error);
    }
  });
}
