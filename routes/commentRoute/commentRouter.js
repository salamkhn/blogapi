import { Router } from "express";
import {
  allcomments,
  createComment,
  deletecommentId,
  getcommentbyId,
  updatecommentbyId,
} from "../../controller/commentController/comment.js";

export const commentRouter = Router();

// @purpose add comments
// @method post
// end-point => api/blog/comments/add
commentRouter.post("/comments/add", createComment);

//@purpose => showallcomments
//method =>get
//end-point =>/api/blog/comments/showall
commentRouter.get("/comments/showall", allcomments);

//purpose => get comment by id
//method =>get
//end-point => /api/blog/comments/getbyId/:id
commentRouter.get("/comments/getbyId/:id", getcommentbyId);

//purpose => update comment by id
//method =>put
//end-point => /api/blog/comments/updatebyId/:id
commentRouter.put("/comments/updatebyId/:id", updatecommentbyId);

//purpose => delete comment by id
//method =DELETE
//end-point =>/api/blog/comments/deletebyId/:id
commentRouter.delete("/comments/deletebyId/:id", deletecommentId);
