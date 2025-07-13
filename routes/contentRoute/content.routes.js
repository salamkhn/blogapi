import { Router } from "express";
import { contentFunction } from "../../controller/contentController/content.js";

export const contentRouter = Router();

// @purpose =>for content
//method => post
// endpoint => api/blog/content

contentRouter.post("/content", contentFunction);
