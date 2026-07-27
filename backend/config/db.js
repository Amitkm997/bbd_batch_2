

import mongoose from "mongoose";

export const connectionDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://amitkm997_db_user:M5i0B781k0MZg61I@cluster0.n92tlnr.mongodb.net/job_portal_Admin");
        console.log("Mongodb connected successfully");
    }catch(error){
        console.log(error)
    }
}

// mongodb://amitkm997_db_user:M5i0B781k0MZg61I@ac-rtdzlfj-shard-00-00.ddz4mau.mongodb.net:27017,ac-rtdzlfj-shard-00-01.ddz4mau.mongodb.net:27017,ac-rtdzlfj-shard-00-02.ddz4mau.mongodb.net:27017/?ssl=true&replicaSet=atlas-abfq5w-shard-0&authSource=admin&appName=Cluster0