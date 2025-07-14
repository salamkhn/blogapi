import { Router } from "express";
import {
  allcomments,
  createComment,
  deletecommentId,
  getcommentbyId,
  updatecommentbyId,
} from "../../controller/commentController/comment.js";

export const commentRouter = Router();

// @purpose Router
// @method post
// end-point => api/blog/comment
commentRouter.post("/addcomment", createComment);

//@purpose => showallcomments
//method =>get
//end-point =>/api/blog/showallcomments
commentRouter.get("/showallcomments", allcomments);

//purpose => get comment by id
//method =>get
//end-point => /api/blog/getcommentbyId
commentRouter.get("/getcommentbyId/:id", getcommentbyId);

//purpose => update comment by id
//method =>put
//end-point => /api/blog/updatecommentbyId
commentRouter.put("/updatecommentbyId/:id", updatecommentbyId);

//purpose => delete comment by id
//method =DELETE
//end-point =>/api/blog/deletecommentbyId
commentRouter.delete("/deletecommentbyId/:id", deletecommentId);
