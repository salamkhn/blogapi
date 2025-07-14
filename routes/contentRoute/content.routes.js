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
// endpoint => api/blog/content/create

contentRouter.post("/content/create", createContent);

//@purpose => show content
//method =>get
//end-point =>/api/blog/content/showallblog
contentRouter.get("/content/showallblog", showallblogsContent);

//purpose => get category by id
//method =>get
//end-point => /api/blog/content/getbyId/:id
contentRouter.get("/content/getbyId/:id", getcontentbyId);

//purpose => update category by id
//method =>get
//end-point => /api/blog/content/updatebyId/:id
contentRouter.put("/content/updatebyId/:id", updatecontentbyId);

//purpose => update content by id
//method =DELETE
//end-point =>/api/blog/content/deletebyid/:id
contentRouter.delete("/content/deletebyid/:id", deletecontentbyId);
