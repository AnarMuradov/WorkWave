import express from "express";
import { createCvCategoryData, cvCategoryAllData, cvCategoryDataById, deleteCvCategoryDataById, updateCvCategoryDataById } from "../Controller/cvCategoryController.js";
export const cvCategoryRouter = express.Router();


cvCategoryRouter.get("/",cvCategoryAllData);
  

cvCategoryRouter.get("/:id", cvCategoryDataById);
  

cvCategoryRouter.post("/", createCvCategoryData);
  

cvCategoryRouter.put("/:id", updateCvCategoryDataById);
  

cvCategoryRouter.delete("/:id", deleteCvCategoryDataById);
  