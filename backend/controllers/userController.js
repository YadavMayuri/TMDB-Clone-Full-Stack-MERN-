import Users from "../modals/userModal.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

//register
export const register = async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        const existingUser = await Users.findOne({email})
        if(existingUser)return res.status(400).json({success:false,message:"Email already exist. Login instead!"})

        const hashedPassword = await bcrypt.hash(password,10)

        const user = new Users({
            name,email,password:hashedPassword
        })
        await user.save();
        return res.status(201).json({success:true,message:"Registration Successful!"})


    }catch(error){
        return res.status(500).json({message:"Internal server error!"})
    }
}


//login
export const login = async(req,res)=>{
    try{
        const{email}= req.body;
        const existingUser = await Users.findOne({email})
        if(!existingUser)return res.status(404).json({message:"User not found!"})

        const jwttoken = process.env.Tmdb_JWT_Token
        console.log(jwttoken,"jwttoken");

        const token = jwt.sign({userId:existingUser._id},jwttoken)
        console.log(token,"token");

        return res.status(200).json({success:true,message:"Login successful!",token})

    }catch(error){
        return res.status(500).json({message:"Internal server error!"})
    }
}


//current user

export const getCurrentUser = async (req, res) => {
    try {
        const { token } = req.body;

        if (!token) return res.status(400).json({ success: false, message: "Token is required." })

        const decodedtoken = jwt.verify(token, process.env.Tmdb_JWT_Token)
        if (!decodedtoken) return res.status(404).json({ success: false, message: "Invalid token." })

        const userId = decodedtoken.userId;

        const user = await Users.findById(userId);
        console.log(user, "user here");
        if (user) {
            const userobj = { userId: user._id, name: user.name, email: user.email }
            console.log(userobj,"user obj from current user controller");
            return res.status(200).json({ success: true, user: userobj })

        } else {
            return res.status(404).json({ success: false, message: "User not found." })
        }

    } catch (err) {
        return res.status(500).json({ success: false, message: "Internal server error." })
    }
}
