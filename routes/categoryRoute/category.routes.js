import { Router } from "express";

import {
  createCategory,
  deleteCategorybyId,
  getCategorybyId,
  showCategory,
  updateCategorybyId,
} from "../../controller/categoryController/category.js";

export const categoryRouter = Router();

// @purpose =>create category
// method => post
// end-point => /api/blog/category
categoryRouter.post("/addcategory", createCategory);

//@purpose => show category
//method =>get
//end-point =>/api/blog/showcategories
categoryRouter.get("/showcategories", showCategory);

//purpose => get category by id
//method =>get
//end-point => /api/blog/getCategorybyId
categoryRouter.get("/getCategorybyId/:id", getCategorybyId);

//purpose => update category by id
//method =>get
//end-point => /api/blog/updateCategorybyId
categoryRouter.put("/updateCategorybyId/:id", updateCategorybyId);

//purpose => update category by id
//method =DELETE
//end-point =>/api/blog/deleteCategorybyId
categoryRouter.delete("/deleteCategorybyid/:id",deleteCategorybyId)
