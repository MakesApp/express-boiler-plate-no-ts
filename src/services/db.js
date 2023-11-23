import mongoose from 'mongoose';
import AppError from '../errors/AppError.js';
import { getMongoUri } from '../config/env.js';

export async function connectDB() {
  try {
    await mongoose.connect(getMongoUri());

    mongoose.connection.on('error', (err) => {
      throw new AppError('Database connection error', 500, true);
    });

    mongoose.connection.on('disconnected', () => {
      throw new AppError('Database disconnected', 500, true);
    });
  } catch (_) {
    throw new AppError('Database connection error', 500, true);
  }
}

export async function closeDatabase() {
  try {
    await mongoose.connection.close();
  } catch (err) {
    throw new AppError('Error closing database', 500, true);
  }
}
