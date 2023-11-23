import pkg from 'jsonwebtoken';
import errorManagement from '../errors/utils/errorMangement.js';
import AppError from '../errors/AppError.js';
import User from '../apps/users/dataAccess/userModel.js';
import { getJwtSecret } from '../config/env.js';

const { verify } = pkg;

const throwUnauthorizedError = () =>
  new AppError(
    errorManagement.commonErrors.authenticationError.message,
    errorManagement.commonErrors.authenticationError.code,
    true,
  );

const verifyToken = async (token, next) =>
  new Promise((resolve, reject) => {
    verify(token, getJwtSecret(), (err, decoded) => {
      if (err) {
        next(throwUnauthorizedError());
        resolve(undefined);
      } else if (typeof decoded === 'object' && decoded !== null && 'id' in decoded && 'role' in decoded) {
        resolve(decoded);
      } else {
        resolve(undefined);
      }
    });
  });

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers?.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
      return next(throwUnauthorizedError());
    }

    const [prefix, token, ...rest] = authHeader.split(' ');
    if (prefix !== 'Bearer' || !token || rest.length > 0) {
      return next(throwUnauthorizedError());
    }

    const decoded = await verifyToken(token, next);

    if (!decoded) {
      return next(throwUnauthorizedError());
    }

    const { id: userId, role } = decoded;
    const user = await User.findById(userId);
    if (!user) return next(throwUnauthorizedError());

    req.userId = userId;
    req.role = role;
    next();
  } catch (err) {
    if (err instanceof Error) {
      next(new AppError(err.message, errorManagement.commonErrors.internalServerError.code, false));
    } else {
      next(new AppError('An unknown error occurred', errorManagement.commonErrors.internalServerError.code, false));
    }
  }
};

export default auth;
