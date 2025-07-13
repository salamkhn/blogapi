import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
  },
  { timestamps: true }
);

export const category = mongoose.model("category", categorySchema);
