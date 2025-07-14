import { comment } from "../../models/comment.model.js";

// create comment function
export const createComment = async (req, res) => {
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

    console.log("exist :", exist);

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
  const { content, likeCount, dislikeCount, reply } = req.body;

  console.log("replay :", content);
  console.log("dislikeCount :", dislikeCount);

  const { replaycontent, replylikeCount, replydislikeCount } = reply[0];

  const id = req.params.id;
  console.log("id :", id);
  try {
    const exist = await comment.findByIdAndUpdate(
      id,
      {
        content,
        likeCount,
        dislikeCount,
        replaycontent,
        replylikeCount,
        replydislikeCount,
      },
      {
        new: true,
      }
    );

    console.log("exist :", exist);

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

  console.log("id :", id);

  try {
    const deleted = await profile.findByIdAndDelete(id);

    //validation
    if (!deleted) {
      return res.status(400).json({
        message: "profile not exist with this id",
        success: false,
      });
    }

    //success response
    return res.status(200).json({
      message: "content with this id deleted successfully",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error in (deleteprofile)",
      success: false,
      error: err.message,
    });
  }
};
