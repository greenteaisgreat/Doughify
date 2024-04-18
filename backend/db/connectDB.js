import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to database: ${connect.connection.host}`);
  } catch (err) {
    throw new Error(`There was an error connecting to the database: ${err}`);
  }
};
