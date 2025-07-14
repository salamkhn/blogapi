import { user } from "../../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// REGISTER USER FUNCTION
export const RegisterUser = async (req, res) => {
  try {
    const { username, email, phone, country, password } = req.body;

    // validation
    if (!username || !email || !phone || !country || !password) {
      return res.status(400).json({
        message: "all field required",
        success: false,
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

// LOGIN USER FUNCTION
export const userLogin = async (req, res) => {
  //destructuring
  const { email, password } = req.body;

  //Validation
  if (!email || !password) {
    return res.status(400).json({
      message: "both field are required",
      success: false,
    });
  }

  const exist = await user.findOne({ email });



  if (!exist) {
    return res.status(400).json({
      message: "user not found",
      success: false,
    });
  }

 

  const isMatching = await bcryptjs.compare(password.trim(), exist.password);


  if (!isMatching) {
    return res.status(400).json({
      message: "invalid credentials",
      success: false,
    });
  }

  if (!exist || !isMatching) {
    return res.status(400).json({
      message: "invalid user details",
      success: false,
    });
  }

  const token = jwt.sign({ userId: exist._id }, "!!!@@#", {
    expiresIn: "1d",
  });

  console.log("token :", token);

  //success response
  return res.status(200).json({
    message: "successfully login",
    success: true,
    token,
  });
};
