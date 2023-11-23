import { isCelebrateError } from 'celebrate';


const handleErrors = (error, res) => {
  // Handle celebrate errors
  if (isCelebrateError(error)) {
    return res.status(400).json({ error: 'Validation error' });
  }

  // Handle Mongoose CastErrors
  if (error.name === 'CastError') {
    const message = 'Invalid ID format';
    return res.status(400).json({ error: message });
  }

  // Handle other specific errors here...

  // If no specific handling, return false
  return false;
};

export default handleErrors;
