import Router from "express";
import { RegisterUser } from "../../controller/userController/user.js";
export const userRouter = Router();

// @purpose => Register-user
//@method- =>  Post
//@endPoint => api/user/register
userRouter.post("/register", RegisterUser);
