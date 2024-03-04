import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { cvRouter } from "./Router/cvRouter.js";
import { commentRouter } from "./Router/commentRouter.js";
import { vacancyRouter } from "./Router/vacancyRouter.js";
import { userRouter } from "./Router/userRouter.js";
import { authRouter } from "./Router/AuthRoute.js";
import 'dotenv/config'
import { vacancyCategoryRouter } from "./Router/vacancyCategoryRouter.js";
import { cvCategoryRouter } from "./Router/cvCategoryRouter.js";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors()); 



app.use("/",cvRouter)
app.use("/comments",commentRouter)
app.use("/",vacancyRouter)
app.use("/users",userRouter)
app.use("/vacancycategories",vacancyCategoryRouter)
app.use("/cvcategories",cvCategoryRouter)
app.use("/",authRouter)


mongoose
  .connect(process.env.SECRET_KEY)
  .then(() => console.log("Connected!"))
  .catch(()=>console.log("Not Connected"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
