import Users from "../modals/userModal.js"
import bcrypt from "bcrypt"

export const CheckForRegister = async(req,res,next)=>{
    try{
        const{name,email,password,confirmPassword}= req.body;
        if(!name || !email || !password || !confirmPassword)return res.status(400).json({message:"All fields are required!"})
        if(password.length < 8 || confirmPassword.length < 8)return res.status(400).json({message:"Password must include atleast 8 characters!"})
        if(password !== confirmPassword)return res.status(400).json({message:"Password and confirm password not matched!"})
        next();

    }catch(error){
        return res.status(500).json({message:"internal server error!"})
    }
}


export const CheckForLogin = async (req,res,next)=>{
    try{
        const {email,password}= req.body;
        if(!email)return res.status(400).json({message:"Email is required!"})
        if(!password)return res.status(400).json({message:"Password is required!"})

        const existingUser = await Users.findOne({email})
        if(!existingUser)return res.status(404).json({message:"User not found!"})

        const comparePassword = await bcrypt.compare(password,existingUser.password)
        if(!comparePassword) return res.status(400).json({message:"Credientials not matched!"})

        next();

    }catch(error){
        return res.status(500).json({message:"Internal server error!"})
    }
}