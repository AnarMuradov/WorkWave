import express from "express";
import { handleLogin, handleRegister } from "../Controller/authController.js";
export const authRouter = express.Router();


authRouter.post("/login", handleLogin);


authRouter.post("/register", handleRegister);
