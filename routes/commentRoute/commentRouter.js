import { Router } from "express";
import { commentFunction } from "../../controller/commentController/comment.js";

export const commentRouter = Router();

// @purpose Router
// @method post
// end-point => api/blog/comment
commentRouter.post("/comment", commentFunction);
