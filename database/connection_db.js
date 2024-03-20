import mongoose from 'mongoose';
import { DB_MONGO_URI } from "../config.js";

// Función para conectar a la base de datos
const connection_db = async () => {
  try {

    await mongoose.connect(DB_MONGO_URI);
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

export default connection_db;