import {mongoose ,Schema}  from "mongoose";

const vacancyCategorySchema = new Schema({
    category:String,
    date: {
      type: Date,
      default: Date.now,
    },
  });
  
 export const vacancyCategoryModel = mongoose.model("VacancyCategory", vacancyCategorySchema);
