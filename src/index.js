import { createServer } from 'http';
import { config } from 'dotenv-flow';
import { connectDB } from './services/db.js';
import app from './app.js';
import AppError from './errors/AppError.js';

config({ path: 'src/config/' });
connectDB()
  .then(() => console.log('DB connected!'))
  .catch(() => {
    throw new AppError('Database connection error', 500, true);
  });
const httpServer = createServer(app);
httpServer.listen(process.env.PORT || 5001, () => {
  if (process.env.NODE_ENV === 'local') {
    console.log('Node running on Local mode ...');
  } else if (process.env.NODE_ENV === 'development') {
    console.log('Node running on Development mode...');
  } else if (process.env.NODE_ENV === 'production') {
    console.log('Node running on production mode...');
  }
});
