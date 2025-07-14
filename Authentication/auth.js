import jwt from "jsonwebtoken";
import { user } from "../models/user.model.js";
const authentication = (req, res, next) => {
  const token = req.header("Auth");

  if (!token) {
    return res.status(400).json({
      message: "login first",
      success: false,
    });
  }

  //verify jwt
  const decoded = jwt.verify(token, "!!!@@#");

  const id = decoded.userId;

  const User = user.findOne({ id });

  if (!User) {
    return res.status(400).json({
      message: "enter valid detail",
      success: false,
    });
  }

  User = req.user;

  next();
};
