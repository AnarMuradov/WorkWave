import express from "express";
import { createVacancyCategoryData, deleteVacancyCategoryDataById, updateVacancyCategoryDataById, vacancyCategoryAllData, vacancyCategoryDataById } from "../Controller/vacancyCategoryController.js";
export const vacancyCategoryRouter = express.Router();


vacancyCategoryRouter.get("/",vacancyCategoryAllData);
  

vacancyCategoryRouter.get("/:id", vacancyCategoryDataById);
  

vacancyCategoryRouter.post("/", createVacancyCategoryData);
  

vacancyCategoryRouter.put("/:id", updateVacancyCategoryDataById);
  

vacancyCategoryRouter.delete("/:id", deleteVacancyCategoryDataById);
  