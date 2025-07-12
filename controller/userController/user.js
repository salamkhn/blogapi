import { dbCon } from "../../dbCon/dbCon.js";
import { user } from "../../models/user.model.js";
// import { dbCon } from "../../dbCon/dbCon.js";
import bcryptjs from "bcryptjs";
// dbCon()
// userController (Register)
export const RegisterUser = async (req, res) => {
  try {
    const { username, email, phone, country, password } = req.body;

    // hashing data just before saving data in to database
    const hashed_password = await bcryptjs.hash("userData", 10);

    //inserting data in dbs based on usrModel
    const userData = new user({
      username,
      email,
      phone,
      country,
      password: hashed_password,
    });

    // saving to database
    await userData.save();

    return res.status(200).json({
      message: "save to dbs successfully",
      data: userData,
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: "error in userController catch",
      success: false,
    });
  }
};
