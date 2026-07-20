

import mongoose from "mongoose";

export const connectionDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://amitkm997_db_user:M5i0B781k0MZg61I@cluster0.n92tlnr.mongodb.net/job_portal");
        console.log("Mongodb connected successfully");
    }catch(error){
        console.log(error)
    }
}