import { user } from "../../models/user.model.js";
import bcryptjs from "bcryptjs";

// Register user function
export const RegisterUser = async (req, res) => {
  try {
    const { username, email, phone, country, password } = req.body;

    // validation
    if (!username || !email || !phone || !country || !password) {
      console.log("all field are required");
      return res.status(400).json({
        message: "all field required",
      });
    }

    //exixting
    const existing = await user.findOne({ email });
    if (existing) {
      return res.status(400).json({
        message: "user already existed",
        success: false,
      });
    }

    // password hashing
    const hashed_password = await bcryptjs.hash(password, 10);

    //getting data
    const userData = new user({
      username,
      email,
      phone,
      country,
      password: hashed_password,
    });

    // save to database
    await userData.save();

    //success response
    return res.status(201).json({
      message: " Database created && save to dbs successfully",
      data: userData,
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: "error in userController catch",
      success: false,
    });
  }
};
