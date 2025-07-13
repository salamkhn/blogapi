import mongoose from "mongoose";

const userModel = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "name is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: Number,
    },
    country: {
      type: String,
      required: [true, "name is required"],
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
  },
  { timestamps: true }
);

export const user = mongoose.model("user", userModel);
