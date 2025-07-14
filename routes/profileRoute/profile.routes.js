import { Router } from "express";
import {
  allprofilesdetails,
  createProfile,
  deleteprofileId,
  getprofilebyId,
  updateprofilebyId,
} from "../../controller/profileController/profile.js";
import { isauthenticated } from "../../Authentication/auth.js";

export const profileRouter = Router();

// @purpose =>createProfile
// method =>post
// endPoint => api/blog/profile/create
profileRouter.post("/profile/create", isauthenticated, createProfile);

//@purpose => showallprofile
//method =>get
//end-point =>/api/blog/profile/showallprofile
profileRouter.get(
  "/profile/showallprofile",
  isauthenticated,
  allprofilesdetails
);

//purpose => get profile by id
//method =>get
//end-point => /api/blog/profile/getbyId/:id
profileRouter.get("/profile/getbyId/:id", isauthenticated, getprofilebyId);

//purpose => update profile by id
//method =>put
//end-point => /api/blog/profile/updatebyId/:id
profileRouter.put(
  "/profile/updatebyId/:id",
  isauthenticated,
  updateprofilebyId
);

//purpose => delete profile by id
//method =DELETE
//end-point =>/api/blog/profile/deletebyId/:id
profileRouter.delete(
  "/profile/deletebyId/:id",
  isauthenticated,
  deleteprofileId
);
