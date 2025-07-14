import { Router } from "express";
import {
  allcomments,
  createComment,
  deletecommentId,
  getcommentbyId,
  updatecommentbyId,
} from "../../controller/commentController/comment.js";
import { isauthenticated } from "../../Authentication/auth.js";

export const commentRouter = Router();

// @purpose add comments
// @method post
// end-point => api/blog/comments/add
commentRouter.post("/comments/add", isauthenticated, createComment);

//@purpose => showallcomments
//method =>get
//end-point =>/api/blog/comments/showall
commentRouter.get("/comments/showall", isauthenticated, allcomments);

//purpose => get comment by id
//method =>get
//end-point => /api/blog/comments/getbyId/:id
commentRouter.get("/comments/getbyId/:id", isauthenticated, getcommentbyId);

//purpose => update comment by id
//method =>put
//end-point => /api/blog/comments/updatebyId/:id
commentRouter.put(
  "/comments/updatebyId/:id",
  isauthenticated,
  updatecommentbyId
);

//purpose => delete comment by id
//method =DELETE
//end-point =>/api/blog/comments/deletebyId/:id
commentRouter.delete(
  "/comments/deletebyId/:id",
  isauthenticated,
  deletecommentId
);
