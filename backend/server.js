import express from 'express'
import companyRoute from './routes/companyRoute.js'
import {connectionDB} from './/config/db.js'
const app=express();

const port=5000;

connectionDB();

app.use('/company',companyRoute);

app.listen(port,()=>{
    console.log("Server is running on port "+port)
})


//amitkm997_db_user

// password-  M5i0B781k0MZg61I


// mongodb+srv://amitkm997_db_user:M5i0B781k0MZg61I@cluster0.n92tlnr.mongodb.net/