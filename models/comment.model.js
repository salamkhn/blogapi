import mongoose from "mongoose";

const replySchema = mongoose.Schema({
  content: {
    type: [String, "content is required"],
    trim: true,
  },
  likeCount: {
    type: Number,
  },
  disLikeCount: {
    type: Number,
  },
});

const commentsSchema = mongoose.Schema(
  {
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    blog: {
      type: mongoose.Types.ObjectId,
      ref: "content",
    },

    content: {
      type: String,
      trim: true,
    },
    likeCount: {
      type: Number,
    },
    disLike: {
      type: Number,
    },
    reply: [replySchema],
  },
  { timestamps: true }
);

const comment = mongoose.model("comment", commentsSchema);
