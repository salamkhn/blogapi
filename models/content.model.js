import mongoose from "mongoose";

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
 

    profile: {
      type: mongoose.Types.ObjectId,
      ref: "profile",
    },
    comment: {
      type: mongoose.Types.ObjectId,
      ref: "commnet",
    },

    content: {
      type: String,
      required: [true, "content required"],
      trim: true,
    },
    tittle: {
      type: String,
      required: [true, "tittle is required"],
      unique: [true, "please choose another tittle name"],
    },
    subtittle: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export const contentdata = mongoose.model("contentdata", contentSchema);
