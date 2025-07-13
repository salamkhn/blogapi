import { comment } from "../../models/comment.model.js";

// comment function
export const commentFunction = async (req, res) => {
  // destructuring
  const { content, likeCount, dislikeCount, reply } = req.body;

  const { replaycontent, replylikeCount, replydislikeCount } = reply[0];

  try {
    // validation
    if (!replaycontent || !replylikeCount || !content || !likeCount) {
      return res.status(400).json({
        message: "all field required",
        success: false,
      });
    }

    // save to dbs
    await comment.create({
      content,
      likeCount,
      dislikeCount,
      reply: [
        {
          replaycontent,
          replylikeCount,
          replydislikeCount,
        },
      ],
    });

    // success response
    return res.status(201).json({
      message: "content is successfully(created) saved to dbs",
      success: true,
    });
  } catch (err) {
    // for server error
    return res.status(500).json({
      message: "internal server error in catch (comment)",
      success: false,
      error: err.message,
    });
  }
};
