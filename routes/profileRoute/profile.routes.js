import { Router } from "express";
import {
  allprofilesdetails,
  createProfile,
  deleteprofileId,
  getprofilebyId,
  updateprofilebyId,
} from "../../controller/profileController/profile.js";

export const profileRouter = Router();

// @purpose =>profileDetail
// method =>post
// endPoint => api/blog/profile
profileRouter.post("/createprofile", createProfile);

//@purpose => showallprofiles
//method =>get
//end-point =>/api/blog/showallprofiledetails
profileRouter.get("/showallprofiledetails", allprofilesdetails);

//purpose => get profile by id
//method =>get
//end-point => /api/blog/getprofilebyId
profileRouter.get("/getprofilebyId/:id", getprofilebyId);

//purpose => update profile by id
//method =>put
//end-point => /api/blog/updateprofilebyId
profileRouter.put("/updateprofilebyId/:id", updateprofilebyId);

//purpose => delete profile by id
//method =DELETE
//end-point =>/api/blog/deleteprofilebyId
profileRouter.delete("/deleteprofilebyId/:id", deleteprofileId);
