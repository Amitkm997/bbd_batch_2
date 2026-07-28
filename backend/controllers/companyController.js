import Company from "../models/company.js";
import Student from "../models/student.js";

export const addCompany =async(req,res)=>{
    try{
        const{companyName,salaryPackage,role,location,description}=req.body;
        if(!companyName){
            return res.status(400).json({
                success:false,
                message:"Please Provide Company Name"
            })
        }

        if(!salaryPackage){
            return res.status(400).json({
                success:false,
                message:"Please provide salary package"
            })
        }

        if(!role){
            return res.status(400).json({
                success:false,
                message:"Please provide role "
            })
        }

        if(!location){
            return res.status(400).json({
                success:false,
                message:"Please provide location "
            })
        }

        const companies=await Company.create({
            companyName,
            salaryPackage,
            role,
            location,
            description
        })

        return res.status(200).json({
            success:true,
            message:"company added successfully",
            company:companies
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}


export const getAllCompanies=async(req,res)=>{
    try{
        const companies=await Company.find();
        
        if(companies.length==0){
            return res.status(404).json({
                success:false,
                message:"No company registered"
            })
        }

        return res.status(200).json({
            success:true,
            message:"companies fetched successfully",
            companies:companies,
            Number_of_comapnaies:companies.length
        })

    }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}


export const getCompanyByid=async(req,res)=>{
    try{
       const{id}=req.params
       const company=await Company.findById(id);
       if(!company){
          return res.status(400).json({
            success:false,
            message:"No company found"
          })
       }

       return res.status(200).json({
          success:true,
          message:"company fetched successfully",
          company:company
       })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:eroor.message
        })
    }
}

export const updateCompany=async(req,res)=>{
    try{
       const {id}=req.params;

       const company=await Company.findByIdAndUpdate(id,req.body,{new:true});
        
       if(!company){
          return res.status(400).json({
            success:false,
            message:"No company found"
          })
       }

       return res.status(200).json({
          success:true,
          message:"company Updated successfully",
          company:company
       })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:eroor.message
        })
    }
}

export const deleteCompany=async(req,res)=>{
    try{
       const {id}=req.params;

       const company=await Company.findByIdAndDelete(id);
        
       if(!company){
          return res.status(400).json({
            success:false,
            message:"No company found"
          })
       }

       return res.status(200).json({
          success:true,
          message:"company Delted successfully",
       })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:eroor.message
        })
    }
}

export const applyCompanies=async(req,res)=>{
    try{
        const{id,email}=req.user;
        const{compId}=req.params;

        //find student
        const student=await Student.findById(id);
        
        if(!student){
            return res.status(400).json({
                success:false,
                message:"No user found"
            })
        }

        //find companies
        const company=await Company.findById(compId);

        if(!company){
            return res.status(400).json({
                success:false,
                message:"No user found"
            })
        }

        //check already applied
        if(student.appliedCompanies.includes(compId)){
            return res.status(400).json({
                success:false,
                message:"Already appied to this job"
            })
        } 

        console.log(student)

        student.appliedCompanies.push(compId);
        company.appliedStudents.push(id);

        await student.save();
        await company.save();

        return res.status(200).json({
            success:true,
            message:"Successfully Applied to this company",
            student,
            company
        })

    }catch(error){
        return res.status(500).json({
            success:false,
            message:eroor.message
        })
    }
}