import { Router } from "express";
import {
  createContent,
  deletecontentbyId,
  getcontentbyId,
  showallblogsContent,
  updatecontentbyId,
} from "../../controller/contentController/content.js";

export const contentRouter = Router();

// @purpose =>for content
//method => post
// endpoint => api/blog/content

contentRouter.post("/createcontent", createContent);

//@purpose => show content
//method =>get
//end-point =>/api/blog/showcontent
contentRouter.get("/showallblogcontent", showallblogsContent);

//purpose => get category by id
//method =>get
//end-point => /api/blog/getContentbyId
contentRouter.get("/getcontentbyId/:id", getcontentbyId);

//purpose => update category by id
//method =>get
//end-point => /api/blog/updatecontentbyId
contentRouter.put("/updatecontentbyId/:id", updatecontentbyId);

//purpose => update content by id
//method =DELETE
//end-point =>/api/blog/deleteContentbyId
contentRouter.delete("/deletecontentbyid/:id", deletecontentbyId);
