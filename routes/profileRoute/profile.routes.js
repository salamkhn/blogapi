import { Router } from "express";
import { profileFunction } from "../../controller/profileController/profile.js";

export const profileRouter = Router();

// @purpose =>profileDetail
// method =>post
// endPoint => api/blog/profile
profileRouter.post("/profile", profileFunction);
