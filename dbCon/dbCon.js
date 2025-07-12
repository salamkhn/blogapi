import mongoose from "mongoose";
import { config } from "dotenv";

config();

export const dbCon = async () => {
  try {
    await mongoose

      .connect(process.env.MONGO_URI)
      .then(() => {
        console.log("connection successfull ");
      })
      .catch((err) => {
        console.log("data base connection failed :", err.message);
        process.exit(1);
      });
  } catch (err) {
    console.log("error during dbs-Connecting", err.message);
  }
};
