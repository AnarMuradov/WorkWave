import { mongoose, Schema } from "mongoose";

const cvSchema = new Schema({
  name: String,
  surname: String,
  patronymic: String,
  gender: String,
  age: Number,
  education: String,
  experience: String,
  details: String,
  categoryId: { type: Schema.Types.ObjectId, ref: "CvCategory" },
  position: String, 
  region: String,
  salary: Number,
  skills: String,
  about: String, 
  email: String,
  phones: String, 
  date: {
    type: Date,
    default: Date.now,
  },
  view: {
    type: Number,
    default: 0,
  },
});

export const cvModel = mongoose.model("CV", cvSchema);
