import {mongoose ,Schema}  from "mongoose";

const cvCategorySchema = new Schema({
    category:String,
    date: {
      type: Date,
      default: Date.now,
    },
  });
  
 export const cvCategoryModel = mongoose.model("CvCategory", cvCategorySchema);
