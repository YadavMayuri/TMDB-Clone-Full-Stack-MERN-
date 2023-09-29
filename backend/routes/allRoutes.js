import express from "express"
import { login, register } from "../controllers/userController.js"
import { getNowPlaying, getPopularmovies, getTopRated, getTranding, getUpcoming } from "../controllers/moviesController.js"

const router = express.Router()

//user routes
router.post('/register',register)
router.post('/login',login)

router.get('/movies/getTranding',getTranding)
router.get('/movies/getNowPlaying',getNowPlaying)
router.get('/movies/getPopularmovies',getPopularmovies)
router.get('/movies/getTopRated',getTopRated)
router.get('/movies/getUpcoming',getUpcoming)





export default router