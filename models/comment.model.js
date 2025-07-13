import mongoose from "mongoose";

const replySchema = mongoose.Schema({
  replaycontent: {
    type: String,
    required: [true, "content is required"],
  },
  replylikeCount: {
    type: Number,
    required: true,
  },
  replydislikeCount: {
    type: Number,
  },
});

const commentsSchema = mongoose.Schema(
  {
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    blog: {
      type: mongoose.Types.ObjectId,
      ref: "content",
    },

    content: {
      type: String,
    },
    likeCount: {
      type: Number,
      required: true,
    },
    dislikeCount: {
      type: Number,
    },
    reply: [replySchema],
  },
  { timestamps: true }
);

export const comment = mongoose.model("comment", commentsSchema);
