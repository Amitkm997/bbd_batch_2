import mongoose, { Mongoose } from "mongoose";

const companySchema=new mongoose.Schema({
   companyName:{
    type:String,
    required:true
   },
   salaryPackage:{
    type:String,
    required:true,
   },
   location:{
    type:String,
    required:true
   },
   role:{
     type:String
   },
   description:{
    type:String,
    required:true
   }
},{timestamps:true})

const Company=mongoose.model("Company",companySchema);

export default Company;