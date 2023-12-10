import errorManagement from './utils/errorMangement.js'; // Update path as needed

const globalErrorHandler = (error, req, res, next) => {
  const statusCode = error.statusCode || errorManagement.commonErrors.internalServerError.code;
  const message = error.message || errorManagement.commonErrors.internalServerError.message;

  // You can uncomment and modify the following lines if needed
  // Logger.error(
  //   `${statusCode} - ${message} - ${req.originalUrl} - ${req.ip} - ${req.method}`
  // );
  // if (error.severity === errorManagement.errorSeverity.HIGH) {
  //   mailer.sendMail(configuration.adminMail, "Critical error occurred", error);
  // }


  if (!error.isOperational) {
    process.exit(1);
  }

  res.status(statusCode).json({ error: message });
};

export default globalErrorHandler;
