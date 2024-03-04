import express from "express";
import { createCvData, cvAllWithCategoryData, cvByCategoryDataById, deleteCvDataById, getAllCvData, getCvDataById, updateCvDataById } from "../Controller/cvController.js";
export const cvRouter = express.Router();

cvRouter.get("/cv", getAllCvData);
  
cvRouter.get("/cvwithcategory",cvAllWithCategoryData);

cvRouter.get("/cv/:id",getCvDataById);
 
cvRouter.get("/cvbycategory/:id", cvByCategoryDataById);

cvRouter.post("/cv", createCvData);  
  

cvRouter.put("/cv/:id",updateCvDataById);
  

cvRouter.delete("/cv/:id", deleteCvDataById);
   