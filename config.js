import 'dotenv/config';

export const DB_PORT = process.env.DB_PORT || 5000;
export const NODE_ENV = process.env.NODE_ENV;

export const DB_MONGO_URI_DEV = process.env.DB_MONGO_URI_DEV;
export const DB_MONGO_URI_TEST = process.env.DB_MONGO_URI_TEST;


