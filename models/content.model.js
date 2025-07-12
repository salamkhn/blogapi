import mongoose, { Mongoose } from "mongoose";

const contentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category",
    },
    views: {
      type: mongoose.Types.ObjectId,
      ref: "view",
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category",
    },
    profile:{
      type:mongoose.Types.ObjectId,
      ref:'profile'
    },
    comment:{
      type:mongoose.Types.ObjectId,
      ref:'commnet'
    },
    views:{
      type:mongoose.Types.ObjectId,
      ref:'view'
    },
    content: {
      type: [String, "content is required"],
      trim: true,
    },
    tittle: {
      type: [String, "tittle is required"],
      trim: true,
    },
    subtittle: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const content = Mongoose.model("content", contentSchema);
