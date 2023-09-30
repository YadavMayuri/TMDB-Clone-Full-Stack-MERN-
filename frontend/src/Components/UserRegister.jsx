import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "./Context/AuthContext";


const UserRegister = () => {

    const { state } = useContext(AuthContext)

    const [userData, setuserData] = useState({ name: '', email: '', password: '', confirmPassword: '' })
    const router = useNavigate()

    const handleChange = (event) => {
        setuserData({ ...userData, [event.target.name]: event.target.value })
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, email, password, confirmPassword } = userData;
        console.log(name, email, password, confirmPassword, "userData");
        try {
            const response = await axios.post('http://localhost:5000/register', {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                confirmPassword: userData.confirmPassword,
            })
            if (response.data.success) {
                setuserData({ name: '', email: '', password: '', confirmPassword: '' })
                router('/login')
                return Toast.success(response.data.success)
            } else {
                return Toast.error(response.data.message)
            }

        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                return Toast.error(err.response.data.message);
            } else {
                return Toast.error("An error occurred. Please try again later.");
            }
        }
    }


    useEffect(() => {
        if (state?.user?.name) {
            Toast.success("You are already logged in.")
            router('/')
        }

    }, [state])


    return (
        <>
            <div className="mx-auto w-[95%] md:flex gap-6">
                <div className="md:w-[23%]   border my-7  rounded-md shadow-md">
                    <div className="w-full bg-sky-400 font-semibold text-xl px-6 py-4 rounded-md text-white">
                        Benefits of being a member
                    </div>
                    <div className="bg-white font-normal text-sm rounded-md px-6 py-4">
                        <div className="py-1">
                            Find something to watch on your subscribed streaming services
                        </div>
                        <div className="py-1">
                            Log the movies and TV shows you have watched
                        </div>
                        <div className="py-1">
                            Keep track of your favourite movies and TV shows and get recommendations from them
                        </div>
                        <div className="py-1">
                            Build and maintain a personal watchlist
                        </div>
                        <div className="py-1">
                            Build custom mixed lists (movies and TV)
                        </div>
                        <div className="py-1">
                            Take part in movie and TV discussions
                        </div>
                        <div className="py-1">
                            Contribute to, and improve the information in our database
                        </div>
                    </div>
                </div>

                <div className="md:w-[76%]   my-7 ">
                    <h1 className="font-bold text-2xl">Sign up for an account</h1>
                    <p className="py-2">Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required to to continue.</p>

                    <div className=" mt-2">
                        <form onSubmit={handleSubmit} method="post">
                            <div className="mb-4">
                                <label className="block text-md  mb-1" htmlFor="username">
                                    Username
                                </label>
                                <input
                                    className="w-full px-3 py-2 border rounded-md focus:outline-sky-300 focus:shadow-outline"
                                    type="text"
                                    name="username"
                                    placeholder=""
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-md  mb-1" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="w-full px-3 py-2 border rounded-md focus:outline-sky-300 focus:shadow-outline"
                                    type="email"
                                    name="email"
                                    placeholder=""
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-md  mb-1" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="w-full px-3 py-2 border rounded-md focus:outline-sky-300 focus:shadow-outline"
                                    type="password"
                                    name="password"
                                    placeholder=""
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-md  mb-1" htmlFor="confirmPassword">
                                    Password Confirm
                                </label>
                                <input
                                    className="w-full px-3 py-2 border rounded-md focus:outline-sky-300 focus:shadow-outline"
                                    type="password"
                                    name="confirmPassword"
                                    placeholder=""
                                    onChange={handleChange}
                                />
                            </div>

                            <p className="mb-4 ">By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.</p>
                            <button
                                className="py-2 px-6 font-bold bg-sky-400 text-white rounded-md hover:bg-sky-500 focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>

                </div>
            </div>

        </>
    )
}

export default UserRegister;