

export const commonErrors = {
  invalidInput: { message: 'Invalid Input', code: 400 },
  authenticationError: { message: 'Unauthorized', code: 401 },
  authorizationError: { message: 'Forbidden', code: 403 },
  resourceNotFound: { message: 'Not Found', code: 404 },
  databaseError: { message: 'Database Error', code: 500 },
  duplicateResource: { message: 'Duplicate Resource', code: 409 },
  validationError: { message: 'Validation Error', code: 400 },
  rateLimitExceeded: { message: 'Rate Limit Exceeded', code: 429 },
  serviceUnavailable: { message: 'Service Unavailable', code: 503 },
  badRequest: { message: 'Bad Request', code: 400 },
  caseError: { message: 'Invalid ID Format ', code: 400 },
  notAcceptable: { message: 'Not Acceptable', code: 406 },
  requestTimeout: { message: 'Request Timeout', code: 408 },
  conflict: { message: 'Conflict', code: 409 },
  gone: { message: 'Gone', code: 410 },
  lengthRequired: { message: 'Length Required', code: 411 },
  preconditionFailed: { message: 'Precondition Failed', code: 412 },
  payloadTooLarge: { message: 'Payload Too Large', code: 413 },
  unsupportedMediaType: { message: 'Unsupported Media Type', code: 415 },
  tooManyRequests: { message: 'Too Many Requests', code: 429 },
  internalServerError: { message: 'Internal Server Error', code: 500 },
  notImplemented: { message: 'Not Implemented', code: 501 },
  badGateway: { message: 'Bad Gateway', code: 502 },
  gatewayTimeout: { message: 'Gateway Timeout', code: 504 },
};

const errorManagement = {
  commonErrors,
  logLevels: {
    INFO: 'info',
    WARN: 'warn',
    ERROR: 'error',
    FATAL: 'fatal',
  },
  errorSeverity: {
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'High',
    CRITICAL: 'Critical',
  },
  errorSources: {
    CLIENT: 'Client',
    SERVER: 'Server',
    DATABASE: 'Database',
    EXTERNAL_SERVICE: 'ExternalService',
    AUTHENTICATION_SERVICE: 'AuthenticationService',
  }
  // ... other error management utilities
};

export default errorManagement;
