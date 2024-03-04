import express from "express";
import { createVacancyData, deleteVacancyDataById, updateVacancyDataById, vacancyAllData, vacancyAllWithCategoryData, vacancyByCategoryDataById, vacancyDataById } from "../Controller/vacancyController.js";
export const vacancyRouter = express.Router();


vacancyRouter.get("/vacancies",vacancyAllData);

vacancyRouter.get("/vacancywithcategory",vacancyAllWithCategoryData);

vacancyRouter.get("/vacancies/:id", vacancyDataById); 

vacancyRouter.get("/vacancybycategory/:id", vacancyByCategoryDataById);

vacancyRouter.post("/vacancies", createVacancyData);
  
 
vacancyRouter.put("/vacancies/:id", updateVacancyDataById);
  

vacancyRouter.delete("/vacancies/:id", deleteVacancyDataById);
  