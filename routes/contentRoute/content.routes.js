import { Router } from "express";
import {
  createContent,
  deletecontentbyId,
  getcontentbyId,
  showallblogsContent,
  updatecontentbyId,
} from "../../controller/contentController/content.js";
import { isauthenticated } from "../../Authentication/auth.js";

export const contentRouter = Router();

// @purpose =>for content
//method => post
// endpoint => api/blog/content/create

contentRouter.post("/content/create", isauthenticated, createContent);

//@purpose => show content
//method =>get
//end-point =>/api/blog/content/showallblog
contentRouter.get("/content/showallblog", isauthenticated, showallblogsContent);

//purpose => get category by id
//method =>get
//end-point => /api/blog/content/getbyId/:id
contentRouter.get("/content/getbyId/:id", isauthenticated, getcontentbyId);

//purpose => update category by id
//method =>get
//end-point => /api/blog/content/updatebyId/:id
contentRouter.put(
  "/content/updatebyId/:id",
  isauthenticated,
  updatecontentbyId
);

//purpose => update content by id
//method =DELETE
//end-point =>/api/blog/content/deletebyid/:id
contentRouter.delete(
  "/content/deletebyid/:id",
  isauthenticated,
  deletecontentbyId
);
