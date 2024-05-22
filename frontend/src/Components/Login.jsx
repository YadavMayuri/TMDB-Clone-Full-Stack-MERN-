import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "./Context/AuthContext";


const Login = () => {

    const [userData, setUserData] = useState({ email: "", password: "" });
    const router = useNavigate();
    const { dispatch, state } = useContext(AuthContext)
    console.log(state, "state from context into login component")

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = userData;

        if (!email || !password) {
            return Toast.error("Email and password are required.");
        }

        try {
            const response = await axios.post('https://tmdb-clone-full-stack-mern.onrender.com/login', {
                email: userData.email,
                password: userData.password,
            }
            );

            if (response.data.success) {
                dispatch({
                    type: "LOGIN",
                    payload: response.data.user,

                })
                localStorage.setItem("TMDBJwtToken", JSON.stringify(response.data.token))
                console.log(response.data.user, "user response from login payload");
                setUserData({ email: "", password: "" });
                window.location.reload()
                Toast.success(response.data.message);
            } else {
                Toast.error(response.data.message);
            }

        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                Toast.error(err.response.data.message);
            } else {
                Toast.error("An error occurred. Please try again later.");
            }
        }
    };


    useEffect(() => {
        if (state?.user?.name) {
            Toast.success("You are logged in.")
            router('/')

        }
    }, [state])


    return (
        <>
            <div className="mx-auto w-[95%] ">

                <div className="  my-7 ">
                    <h1 className="font-bold text-2xl">Login to your account</h1>
                    <p className="py-2">In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. If you do not have an account, registering for an account is free and simple. <span className="text-sky-500 cursor-pointer hover:underline" onClick={()=>router('/register')}>Click here</span> to get started.</p>

                    <div className=" mt-2">
                        <form onSubmit={handleSubmit} method="post">

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

                            <button className="py-2 px-6 font-bold bg-sky-400 text-white rounded-md hover:bg-sky-500 focus:outline-none focus:shadow-outline" type="submit"> Login
                            </button>
                        </form>
                    </div>

                </div>
            </div>

        </>

    )
}
export default Login