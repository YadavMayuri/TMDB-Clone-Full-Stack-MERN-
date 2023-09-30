const Login = () => {
    return (
        <>
            <div className="mx-auto w-[95%] ">

                <div className="  my-7 ">
                    <h1 className="font-bold text-2xl">Login to your account</h1>
                    <p className="py-2">In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. If you do not have an account, registering for an account is free and simple. <span className="text-sky-500 cursor-pointer hover:underline">Click here</span> to get started.</p>

                    <div className=" mt-2">
                        <div className="mb-4">
                            <label className="block text-md  mb-1" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full px-3 py-2 border rounded-md focus:outline-sky-300 focus:shadow-outline"
                                type="email"
                                name="email"
                                placeholder=""
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
                            />
                        </div>

                        <button className="py-2 px-6 font-bold bg-sky-400 text-white rounded-md hover:bg-sky-500 focus:outline-none focus:shadow-outline" type="button"> Login
                        </button>
                    </div>

                </div>
            </div>

        </>

    )
}
export default Login