import express from "express"
import { getCurrentUser, login, register } from "../controllers/userController.js"
import { getCastDetails, getNowPlaying, getPopularmovies, getSingleMovie, getTopRated, getTranding, getUpcoming } from "../controllers/moviesController.js"
import { CheckForLogin, CheckForRegister } from "../middleware/auth.js"

const router = express.Router()

//user routes
router.post('/register',CheckForRegister,register)
router.post('/login',CheckForLogin,login)
router.post('/getCurrentUser',getCurrentUser)


router.get('/movies/getTranding',getTranding)
router.get('/movies/getNowPlaying',getNowPlaying)
router.get('/movies/getPopularmovies',getPopularmovies)
router.get('/movies/getTopRated',getTopRated)
router.get('/movies/getUpcoming',getUpcoming)
router.get('/movies/getSingleMovie/:id',getSingleMovie)
router.get('/movies/getCastDetails/:id',getCastDetails)





export default router