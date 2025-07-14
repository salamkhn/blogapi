import { profile } from "../../models/profile.model.js";

// create profile
export const createProfile = async (req, res) => {
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

// show allprofilesdetails
export const allprofilesdetails = async (req, res) => {
  try {
    const allprofiles = await profile.find({});

    //if not any category present in dbs
    if (!allprofiles) {
      return res.status(400).json({
        message: "not any profile-detail present",
        success: false,
      });
    }

    // if present show success response
    return res.status(200).json({
      message: "all profile successfully loaded",
      allprofiles,
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error (catch of showallprofiledetail)",
      error: err.message,
      success: false,
    });
  }
};

// get profile by id
export const getprofilebyId = async (req, res) => {
  try {
    const id = req.params.id;

    const exist = await profile.findById(id);

    //validation
    if (!exist) {
      return res.status(400).json({
        message: "not any profile found with this id",
        success: false,
      });
    }

    // success response if found
    return res.status(200).json({
      message: "this profile found with given id",
      success: true,
      content: exist,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error (in getprofilebyId)",
      success: false,
    });
  }
};

//update profile by id
export const updateprofilebyId = async (req, res) => {
  const { profilePicture, bio } = req.body;
  const id = req.params.id;

  try {
    const exist = await profile.findByIdAndUpdate(
      id,
      { profilePicture, bio },
      {
        new: true,
      }
    );

    console.log("exist :", exist);

    //validation
    if (!exist) {
      return res.status(400).json({
        message: "profile with this id is not found",
        success: false,
     
      });
    }

    // if find than update it's
    return res.status(201).json({
      message: "profile updated successfully",
      success: true,
         profile: exist,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error (in updateprofilebyId))",
      error: err.message,
    });
  }
};

// delete profile by id
export const deleteprofileId = async (req, res) => {
  const id = req.params.id;



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
