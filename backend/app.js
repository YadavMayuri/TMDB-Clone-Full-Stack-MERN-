console.log("working");

import express from "express"
import morgan from "morgan";
import env from "dotenv"
import mongoose from "mongoose";
import cors from "cors"
import router from "./routes/allRoutes.js";
env.config()

const app = express()

app.use(cors());


app.use(morgan('dev'))
app.use(express.json())
app.use(router)


mongoose.connect(`${process.env.MongoDB_URL}`)
.then(()=>console.log("DB connected successfully"))
.catch((err)=>console.log("DB error =>",err))
app.listen(process.env.PORT,()=>console.log(`working on port ${process.env.PORT}`))

