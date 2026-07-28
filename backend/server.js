import express from 'express'
import companyRoute from './routes/companyRoute.js'
import {connectionDB} from './/config/db.js'
import studentRoute from './routes/studentRoute.js'
import cors from "cors"
const app=express();

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(express.json());
const port=5000;

connectionDB();

app.use(express.json());

app.use('/company',companyRoute);
app.use('/student',studentRoute);

app.listen(port,()=>{
    console.log("Server is running on port "+port)
})


