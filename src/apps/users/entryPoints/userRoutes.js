import express from 'express';
import auth from '../../../middlewares/auth.js';
import { getUserByIdValidation } from './usersValidation.js';
import * as usersController from '../domain/usersController.js';

const router = express.Router();

router.get(
  // if we wouldn't get the userId from auth, we would get it from the params
  '/details/:userId',
  getUserByIdValidation,
  auth,
  usersController.getUserById,
);

export default router;
