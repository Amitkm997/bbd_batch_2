import express from 'express'
import companyRoute from './routes/companyRoute.js'
import {connectionDB} from './/config/db.js'
const app=express();
app.use(express.json());
const port=5000;

connectionDB();

app.use('/company',companyRoute);

app.listen(port,()=>{
    console.log("Server is running on port "+port)
})



