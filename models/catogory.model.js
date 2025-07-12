import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
  {
    name: {
      type: [String, "catagory name is required"],
      trim: true,
    },
  },
  { timestamps: true }
);

const category = mongoose.model("category", categorySchema);
