import { commentModel } from "../Model/commentModel.js";



export const getAllComment = async (req, res) => {
    try {
      const comments = await commentModel.find();
      res.status(200).json(comments);
    } catch (error) {
      res.send(error.message);
    }
  }

  export const createComment = async (req, res) => {
    try {
      const { text } = req.body;
      const newComments = new commentModel({
        text,
      });
      await newComments.save();
      res.status(200).json(newComments);
    } catch (error) {
      res.send(error.message);
    }
  }

  export const deleteCommentById = async (req, res) => {
    try {
      const { id } = req.params;
      const comments = await commentModel.findByIdAndDelete(id);
      res.status(200).json("Data is deleted");
    } catch (error) {
      res.send(error.message);
    }
  }
