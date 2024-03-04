import express from "express";

import {
  createComment,
  deleteCommentById,
  getAllComment,
} from "../Controller/commentController.js";
export const commentRouter = express.Router();

commentRouter.get("/", getAllComment);

commentRouter.post("/", createComment);

commentRouter.delete("/:id", deleteCommentById);
