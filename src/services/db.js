import mongoose from 'mongoose';
import AppError from '../errors/AppError.js';
import { getMongoUri } from '../config/env.js';
import errorManagement from '../errors/utils/errorMangement.js';

export async function connectDB() {
  try {
    await mongoose.connect(getMongoUri());

    mongoose.connection.on('error', (err) => {
      throw new AppError('Database connection error', errorManagement.commonErrors.internalServerError.code, true);
    });

    mongoose.connection.on('disconnected', () => {
      throw new AppError('Database disconnected', errorManagement.commonErrors.internalServerError.code, true);
    });
  } catch (_) {
    throw new AppError('Database connection error', errorManagement.commonErrors.internalServerError.code, true);
  }
}

export async function closeDatabase() {
  try {
    await mongoose.connection.close();
  } catch (err) {
    throw new AppError('Error closing database', errorManagement.commonErrors.internalServerError.code, true);
  }
}
