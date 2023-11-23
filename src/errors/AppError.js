class AppError extends Error {
  statusCode;
  isOperational;

  constructor(message, statusCode, isOperational) {
    super(message);

    this.statusCode = statusCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
