import mongoose from "mongoose";

const profileSchema = mongoose.Schema(
  {
    type: mongoose.Types.ObjectId,
    ref: "user",
    profilePicture: {
      type: [String, "picture is required"],
    },
    bio: {
      type: String,
      lowercase: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const profile = mongoose.model("profile", profileSchema);
