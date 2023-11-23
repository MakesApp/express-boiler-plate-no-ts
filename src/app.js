import 'express-async-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import globalErrorHandler from './errors/globalErrorHandler.js';
import catchProgrammingErrors from './errors/catchProgrammingErrors.js';
import AppError from './errors/AppError.js';
import corsMiddleware from './middlewares/cors.js';
import userRoutes from './apps/users/entryPoints/userRoutes.js';

const app = express();

// middlewares
app.use(cookieParser());
app.use(corsMiddleware);
app.use(express.json());

// Routes
app.use('/users', userRoutes);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404, true));
});

// Error handling
app.use(catchProgrammingErrors);
app.use(globalErrorHandler);

export default app;
