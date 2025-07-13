import { Router } from "express";

import { categoryFunction } from "../../controller/categoryController/category.js";

export const categoryRouter = Router();

// @purpose =>category
// method => post
// end-point => /api/blog/category
categoryRouter.post("/category", categoryFunction);
