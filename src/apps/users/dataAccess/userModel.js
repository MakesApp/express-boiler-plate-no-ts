import { applyErrorHandlingMiddleware } from '../../../errors/utils/dbErrorHandling.js';
import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  exampleId: { required: true, type: String, default: 'exampleId' },
  name: { required: true, type: String, default: 'Example name' },
});

applyErrorHandlingMiddleware(userSchema);

export default mongoose.model('User', userSchema);
