import mongoose from "mongoose";

const viewsSchema = mongoose.Schema(
  {
    blogcontent: {
      type: mongoose.Types.ObjectId,
      ref: "content",
    },
    views: {
      type: Number,
      required: [true, "views required"],
    },
  },
  { timestamps: true }
);

export const view = mongoose.model("view", viewsSchema);
