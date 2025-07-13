import { user } from "../../models/user.model.js";
import bcryptjs from "bcryptjs";

// Login function
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
  console.log("exist-password :", exist.password);
  //Validation to dbs
  // const encryptedpassword = await user.findOne({ password });
  console.log("password :", password);
  console.log("hash password :", exist.password);
  const isMatching = await bcryptjs.compare(password, exist.password);
  // console.log("encryptedpassword", encryptedpassword);
  console.log("isMatching :", isMatching);
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

  //success
  return res.status(200).json({
    message: "successfully login",
    success: true,
  });
};
