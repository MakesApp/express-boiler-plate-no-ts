import AppError from './AppError.js'; // Adjust the import path as needed

const catchProgrammingErrors = (handler) => async (req, res, next) => {
  try {
    await handler(req, res, next);
  } catch (err) {
    if (err instanceof AppError) {
      next(err);
    } else if (err instanceof Error) {
      // Check if err is an instance of Error
      // If it's a programmer error, wrap it in an AppError and set it as a programming error
      next(new AppError(err.message, 500, false));
    } else {
      // Handle other unknown errors here
      next(new AppError('Unknown error', 500, false));
    }
  }
};

export default catchProgrammingErrors;
