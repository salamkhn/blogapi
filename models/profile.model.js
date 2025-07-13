import mongoose from "mongoose";

const profileSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    profilePicture: {
      type: String,
      required: [true, "profilePicture is required"],
    },
    bio: {
      type: String,
      lowercase: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const profile = mongoose.model("profile", profileSchema);
