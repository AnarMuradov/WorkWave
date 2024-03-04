import {mongoose ,Schema}  from "mongoose";
   

const commentSchema = new Schema({
    text: String,
    date: {
      type: Date,
      default: Date.now,
    },
  });
  
  
  
 export const commentModel = mongoose.model("Comments", commentSchema);
  