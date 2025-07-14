import { Router } from "express";

import {
  createCategory,
  deleteCategorybyId,
  getCategorybyId,
  showCategory,
  updateCategorybyId,
} from "../../controller/categoryController/category.js";
import { isauthenticated } from "../../Authentication/auth.js";

export const categoryRouter = Router();

// @purpose =>create category
// method => post
// end-point => /api/blog/category/add
categoryRouter.post("/category/add", createCategory);

//@purpose => show category
//method =>get
//end-point =>/api/blog/category/showall
categoryRouter.get("/category/showall", showCategory);

//purpose => get category by id
//method =>get
//end-point => /api/blog/category/getbyId/:id
categoryRouter.get("/category/getbyId/:id", getCategorybyId);

//purpose => update category by id
//method =>get
//end-point => /api/blog/category/updatebyId/:id
categoryRouter.put("/category/updatebyId/:id", updateCategorybyId);

//purpose => update category by id
//method =DELETE
//end-point =>/api/blog/category/deletebyid/:id
categoryRouter.delete("/category/deletebyid/:id",isauthenticated, deleteCategorybyId);
