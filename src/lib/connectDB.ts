// lib/connectDB.ts
import mongoose from "mongoose";

const mongoURI = (process.env.MONGO_DB_URI as string) || "";
mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

const dbConnection = mongoose.connection;

dbConnection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);
dbConnection.once("open", () => {
  console.log("MongoDB connection is open");
});

export default connectDB;
