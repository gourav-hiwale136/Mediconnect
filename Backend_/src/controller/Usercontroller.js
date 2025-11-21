import User from "../model/Usermodel.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

export const signupfun = async(req,res) => {
    try {
        const {name,email,password,role} = req.body
        
        const userexists = await User.findOne({email})

        if(userexists) return res.status(400).send("This User Already Exists") 

        let hashedpass = await bcrypt.hash(password,10)

        const user = await User.create({
            name,
            email,
            password:hashedpass,
            role
        })

        res.json({message:"User Created Successfully" , user })

    } catch (error) {
        console.log(error)
    }
}


export const loginfun = async(req,res) => {
    try {
        const {email,password} = req.body

        const user = await User.findOne({email})

        if(!user) return res.status(400).send("User Does Not Exist")

        const match = bcrypt.compare(password,user.password)

        if(!match) return res.status(400).send("Wrong Credentials")

        const token = jwt.sign(
					{
						name: user.name,
						email: user.email,
						password: user.password,
						role: user.role,
					},
					process.env.secretkey,
					{ expiresIn: "3h" }
				);
            res.status(201).json({message:"User Loggined successfully " , user , token})
    } catch (error) {
        console.log(error)
    }
}