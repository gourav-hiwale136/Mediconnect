import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import UserRouter from './routes/userroutes.js'
import cors from 'cors'
dotenv.config()
const app = express()
app.use(express.json())

app.use(cors())

const port=process.env.PORT

connectDb(process.env.Mongo_Url);

app.use("/user",UserRouter)

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})