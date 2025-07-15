import { comment } from "../../models/comment.model.js";

// create comment function
export const createComment = async (req, res) => {
  // destructuring
  const { content, likeCount, dislikeCount, reply,owner,blog } = req.body;

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
      blog,
      owner:req.user,
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

// show allprofilesdetails
export const allcomments = async (req, res) => {
  try {
    const allcomments = await comment.find({});

    //if not any category present in dbs
    if (!allcomments) {
      return res.status(400).json({
        message: "not any comment-detail present",
        success: false,
      });
    }

    // if present show success response
    return res.status(200).json({
      message: "all comments successfully loaded",
      allcomments,
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error (catch of showallcommentsdetails)",
      error: err.message,
      success: false,
    });
  }
};

// get profile by id
export const getcommentbyId = async (req, res) => {
  try {
    const id = req.params.id;

    const exist = await comment.findById(id);

    //validation
    if (!exist) {
      return res.status(400).json({
        message: "not any comment found with this id",
        success: false,
      });
    }

    // success response if found
    return res.status(200).json({
      message: "this comment found with given id",
      success: true,
      comment: exist,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error (in getcommentsbyId)",
      success: false,
    });
  }
};

//update profile by id
export const updatecommentbyId = async (req, res) => {
  try {
    const { content, likeCount, dislikeCount,owner,blog reply } = req.body;

    let updatereply;

    // checking if reply is array than destrusture
    if (Array.isArray(reply) && reply.length > 0) {
      const { replaycontent, replylikeCount, replydislikeCount } = reply[0];
      updatereply = [
        {
          replaycontent,
          replylikeCount,
          replydislikeCount,
        },
      ];
    }

    const id = req.params.id;
    const existing = await comment.findById(id);

    // the usage of nullscollesion (if left equation is false than use right equation)
    const updatedfield = {
      content: content ?? existing.content,
      likeCount: likeCount ?? existing.likeCount,
      dislikeCount: dislikeCount ?? existing.dislikeCount,
      reply: reply ?? existing.reply,
      blog:blog ?? existing.blog,
      user:req.user
    };

    const exist = await comment.findByIdAndUpdate(id, updatedfield, {
      new: true,
    });

    //validation
    if (!exist) {
      return res.status(400).json({
        message: "comment with this id is not found",
        success: false,
      });
    }

    // if find than update it's
    return res.status(201).json({
      message: "profile updated successfully",
      success: true,
      comment: exist,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error (in updatecommentbyId))",
      error: err.message,
    });
  }
};

// delete profile by id
export const deletecommentId = async (req, res) => {
  const id = req.params.id;



  try {
    const deleted = await comment.findByIdAndDelete(id);

    //validation
    if (!deleted) {
      return res.status(400).json({
        message: "comment not exist with this id",
        success: false,
      });
    }

    //success response
    return res.status(200).json({
      message: "comment with this id deleted successfully",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error in (deletecomment)",
      success: false,
      error: err.message,
    });
  }
};
