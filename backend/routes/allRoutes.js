import express from "express"
import { login, register } from "../controllers/userController.js"

const router = express.Router()

//user routes
router.post('/register',register)
router.post('/login',login)



export default router