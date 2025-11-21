import express from 'express'
import { loginfun, signupfun } from '../controller/Usercontroller.js'
import User from '../model/Usermodel.js'
const UserRouter = express.Router() 

UserRouter.post("/signup",signupfun)

UserRouter.post("/login",loginfun)



export default UserRouter