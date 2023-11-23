import UserModel from './userModel.js';

export const getUserById = async (id) => UserModel.findById(id);
