import { vacancyCategoryModel } from "../Model/vacancyCategoryModel.js";

export const vacancyCategoryAllData = async (req, res) => {
  try {
    const vacancyCategories = await vacancyCategoryModel.find();
    res.status(200).json(vacancyCategories);
  } catch (error) {
    res.send(error.message);
  }
};

export const vacancyCategoryDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const vacancyCategories = await vacancyCategoryModel.findById(id);
    res.status(200).json(vacancyCategories);
  } catch (error) {
    res.send(error.message);
  }
};

export const createVacancyCategoryData = async (req, res) => {
  try {
    const {
      category
    } = req.body;
    const newVacancyCategory = new vacancyCategoryModel({
      category,
    });
    await newVacancyCategory.save();
    res.status(200).json(newVacancyCategory);
  } catch (error) {
    res.send(error.message);
  }
};

export const updateVacancyCategoryDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      category
    } = req.body;
    const vacancyCategories = await vacancyCategoryModel.findByIdAndUpdate(id, {
      category
    });
    res.status(200).json(vacancyCategories);
  } catch (error) {
    res.send(error.message);
  }
};

export const deleteVacancyCategoryDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const vacancyCategories = await vacancyCategoryModel.findByIdAndDelete(id);
    res.status(200).json("Data is deleted");
  } catch (error) {
    res.send(error.message);
  }
};
