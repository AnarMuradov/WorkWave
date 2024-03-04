import { cvModel } from "../Model/cvModel.js";


export const getAllCvData = async (req, res) => {
    try {
      const cv = await cvModel.find();
      res.status(200).json(cv); 
    } catch (error) {
      res.send(error.message);
    }
  } 
  export const cvAllWithCategoryData = async (req, res) => {
    try {
      const cv = await cvModel.find().populate("categoryId");
      res.status(200).json(cv);
    } catch (error) {
      res.send(error.message);
    }
  };

  export const cvByCategoryDataById = async (req, res) => {
    try {
      const { id } = req.params;
      const cv = await cvModel.find({categoryId:id});
      res.status(200).json(cv);
    } catch (error) {
      res.send(error.message);  
    }
  };
  
  export const getCvDataById= async (req, res) => {
    try {
      const { id } = req.params;
    const cv = await cvModel.findById(id);
    cv.view = cv.view + 1;
    await cv.save();
      res.status(200).json(cv);
    } catch (error) {
      res.send(error.message);
    }
  }
  

  export const createCvData = async (req, res) => {
    try {
      const {  name,
        surname,
        patronymic,
        gender,
        age,
        education,
        experience,
        details,
        categoryId,
        position,
        region,
        salary,
        skills,
        about,
        email,
        phones,view } = req.body;
      const newCv = new cvModel({
        name,
        surname,
        patronymic,
        gender,
        age,
        education,
        experience,
        details,
        categoryId,
        position,
        region,
        salary,
        skills,
        about,
        email,
        phones,view
      });
      await newCv.save();
      res.status(200).json(newCv);
    } catch (error) {
      res.send(error.message);
    }
  }

 export const updateCvDataById = async (req, res) => {
    try {
      const { id } = req.params;
      const {  name,
        surname,
        patronymic,
        gender,
        age,
        education,
        experience,
        details,
        categoryId,
        position,
        region,
        salary,
        skills,
        about,
        email,
        phones,view } = req.body;
      const cv = await cvModel.findByIdAndUpdate(id, {
        name,
        surname,
        patronymic,
        gender,
        age,
        education,
        experience,
        details,
        categoryId,
        position,
        region,
        salary,
        skills,
        about,
        email,
        phones,view
      });
      res.status(200).json(cv);
    } catch (error) {
      res.send(error.message);
    }
  }

  export const deleteCvDataById = async (req, res) => {
    try {
      const { id } = req.params;
      const cv = await cvModel.findByIdAndDelete(id);
      res.status(200).json("Data is deleted");
    } catch (error) {
      res.send(error.message);
    }
  }