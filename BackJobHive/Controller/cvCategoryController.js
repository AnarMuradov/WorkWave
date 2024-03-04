import { cvCategoryModel } from "../Model/cvCategoryModel.js";

export const cvCategoryAllData = async (req, res) => {
  try {
    const cvCategories = await cvCategoryModel.find();
    res.status(200).json(cvCategories);
  } catch (error) {
    res.send(error.message);
  }
};

export const cvCategoryDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const cvCategories = await cvCategoryModel.findById(id);
    res.status(200).json(cvCategories);
  } catch (error) {
    res.send(error.message);
  }
};

export const createCvCategoryData = async (req, res) => {
  try {
    const {
      category
    } = req.body;
    const newCvCategory = new cvCategoryModel({
      category,
    });
    await newCvCategory.save();
    res.status(200).json(newCvCategory);
  } catch (error) {
    res.send(error.message);
  }
};

export const updateCvCategoryDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      category
    } = req.body;
    const cvCategories = await cvCategoryModel.findByIdAndUpdate(id, {
      category
    });
    res.status(200).json(cvCategories);
  } catch (error) {
    res.send(error.message);
  }
};

export const deleteCvCategoryDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const cvCategories = await cvCategoryModel.findByIdAndDelete(id);
    res.status(200).json("Data is deleted");
  } catch (error) {
    res.send(error.message);
  }
};
