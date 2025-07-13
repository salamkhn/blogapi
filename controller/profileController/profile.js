import { profile } from "../../models/profile.model.js";

export const profileFunction = async (req, res) => {
  const { profilePicture, bio } = req.body;

  try {
    // validation
    if (!profilePicture || !bio) {
      return res.status(400).json({
        message: "all field are required",
        success: false,
      });
    }

    //save to dbs
    await profile.create({
      profilePicture,
      bio,
    });

    //success response
    return res.status(201).json({
      message: "profile detail successfully saved",
      success: true,
      profilePicture,
      bio,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error (catch profile)",
      success: false,
      error: err.message,
    });
  }
};
