import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import UserRouter from './routes/userroutes.js'
import AppointmentRouter from "./routes/appointmentroutes.js";
import DoctorRouter from './routes/doctorroutes.js';

import cors from 'cors'
dotenv.config()
const app = express()
app.use(express.json())

app.use(cors())

const port=process.env.PORT

connectDb(process.env.Mongo_Url);


app.get("/data",(req,res)=>{
    res.send("hiii")
})

app.use("/user",UserRouter)
app.use("/api/appointments", AppointmentRouter);
app.use("/api/doctors", DoctorRouter)


app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
});