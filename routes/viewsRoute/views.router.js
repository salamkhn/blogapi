import { Router } from "express";
import { viewFunction } from "../../controller/viewsController/views.js";

export const viewsRouter = Router();

// @purpose views
// method Route
// endpoint =>api/blog/views
viewsRouter.post("/views", viewFunction);
