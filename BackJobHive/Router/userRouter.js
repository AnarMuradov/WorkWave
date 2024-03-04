import express from "express";
import {
  addCvWishlist,
  addWishlist,
  createUser,
  deleteUserById,
  getAllUserData,
  getUserById,
  showCvWishlist,
  showWishlist,
  updateUserById,
} from "../Controller/userController.js";
import { authMiddleware } from "../Middleware/AuthMiddleware.js";
export const userRouter = express.Router();

userRouter.get("/", authMiddleware(["Admin"]), getAllUserData);

userRouter.get("/:id", authMiddleware(["User", "Admin"]), getUserById);

userRouter.post("/", authMiddleware(["Admin"]), createUser);

userRouter.put("/adminupdate/:id", authMiddleware(["Admin"]), updateUserById);

userRouter.put("/addwishlist", authMiddleware(["User", "Admin"]), addWishlist);
userRouter.put("/addcvwishlist", authMiddleware(["User", "Admin"]), addCvWishlist);


userRouter.put(
  "/showwishlist/:id",
  authMiddleware(["User", "Admin"]),
  showWishlist
);
userRouter.put(
  "/showcvwishlist/:id",
  authMiddleware(["User", "Admin"]),
  showCvWishlist
);

userRouter.delete("/:id", authMiddleware(["Admin"]), deleteUserById);
