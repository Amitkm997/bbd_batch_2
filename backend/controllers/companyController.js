import Company from '../models/company.js'

export const addCompany=async(req,res)=>{
    try{
       const company= await Company.create(req.body);
       res.send(company);
    }catch(error){
        console.log(error);
    }
} 