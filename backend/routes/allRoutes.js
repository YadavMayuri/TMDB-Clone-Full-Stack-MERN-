import express from "express"
import { login, register } from "../controllers/userController.js"
import { getTranding } from "../controllers/moviesController.js"

const router = express.Router()

//user routes
router.post('/register',register)
router.post('/login',login)

router.get('/movies/getTranding',getTranding)

export default router