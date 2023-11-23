const getEnvVariable = (varName) => {
  const value = process.env[varName];
  if (!value) {
    throw new Error(`${varName} is not defined in .env file`);
  }
  return value;
};

export const getJwtSecret = ()=> getEnvVariable('JWT_SECRET');

export const getMongoUri = () => getEnvVariable('MONGO_URI');
