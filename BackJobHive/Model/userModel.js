import {mongoose ,Schema}  from "mongoose";


const userSchema = new Schema({
username:String,
email:{type:String,unique:true},
password:{type:String,unique:true},
role:{
    type:String,
    default:"User"
},
vacancyWishlist:[{ type: Schema.Types.ObjectId, ref: 'Vacancy' }],
cvWishlist:[{ type: Schema.Types.ObjectId, ref: 'CV' }]
},{timestamps:true})

export const userModel = mongoose.model("User", userSchema);

