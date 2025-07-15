import jwt from "jsonwebtoken";
import { user } from "../models/user.model.js";
export const isauthenticated = (req, res, next) => {
  const token = req.header("auth");

  console.log("token => token :", token);

  if (!token) {
    return res.status(400).json({
      message: "login first",
      success: false,
    });
  }

  //verify jwt
  const decoded = jwt.verify(token, process.env.Secrete_key);

  const id = decoded.userId;

  let User = user.findOne({ id });

  if (!User) {
    return res.status(400).json({
      message: "enter valid detail",
      success: false,
    });
  }

  req.user = User;

  next();
};
