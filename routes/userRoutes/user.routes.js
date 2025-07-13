import Router from "express";
import { RegisterUser } from "../../controller/userController/user.js";
import { userLogin } from "../../controller/userController/userLogin.js";
export const userRouter = Router();

// @purpose => Register-user
//@method- =>  Post
//@endPoint => api/user/register

userRouter.post("/register", RegisterUser);

// @purpose =>user-login
// method =>Login
// endpoint => api/user/login
userRouter.post("/login", userLogin);
