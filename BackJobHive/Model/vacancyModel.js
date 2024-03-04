import {mongoose ,Schema}  from "mongoose";

const vacancySchema = new Schema({
    categoryId: { type: Schema.Types.ObjectId, ref: 'VacancyCategory' },
    position: String,
    region: String,
    age: String,
    education: String,
    experience: String,
    requirements: String,
    description: String,
    company: String,
    contact: String,
    phone:String,
    email:String,
    salary:String,
    date: {
      type: Date,
      default: Date.now,
    },
    view:{
      type:Number,
      default:0,
    }
  });
  
 export const vacancyModel = mongoose.model("Vacancy", vacancySchema);
