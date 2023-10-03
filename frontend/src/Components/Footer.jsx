import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';

const Footer = () => {

    const { state, dispatch } = useContext(AuthContext)
    return (

        <footer className="bg-sky-950">
            <div
                className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                <div
                    className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-5 w-[68%] m-auto">
                    <div>
                        <div className=" mb-10 ">
                            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" className="h-20 w-auto" alt="" />
                        </div>
                        {state?.user ? (<span className=" text-cyan-500  font-bold text-lg border py-2 px-4 rounded-md bg-white  ">
                            {state?.user?.name}
                        </span>) : (<></>)}


                    </div>
                    <div>
                        <p className=" uppercase text-white font-bold">THE BASICS</p>

                        <ul className="mt-1 space-y-1 text-md">
                            <li>
                                <a href="#" className="text-white transition hover:opacity-75">
                                    About TMDB
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-white transition hover:opacity-75">
                                    Contact Us
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-white transition hover:opacity-75">
                                    Support Forums
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-white transition hover:opacity-75">
                                    API
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-white transition hover:opacity-75">
                                    System Status
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className=" uppercase text-white font-bold">GET INVOLVED</p>

                        <ul className="mt-1 space-y-1 text-md">
                            <li>
                                <a href="#" className="text-white transition hover:opacity-75">
                                    Contribution Bible
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-white transition hover:opacity-75">
                                    Add New Movie
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-white transition hover:opacity-75">
                                    Add New TV Show
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className=" uppercase text-white font-bold">COMMUNITY</p>

                        <ul className="mt-1 space-y-1 text-md">
                            <li>
                                <a href="#" className="text-white transition hover:opacity-75">
                                    Guidelines
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-white transition hover:opacity-75">
                                    Discussions
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-white transition hover:opacity-75">
                                    Leaderboard
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white transition hover:opacity-75">
                                    Twitter
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div>
                        <p className=" uppercase text-white font-bold">Legal</p>

                        <ul className="mt-1 space-y-1 text-md">
                            <li>
                                <a href="#" className="text-white transition hover:opacity-75">
                                Terms of Use
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-white transition hover:opacity-75">
                                API Terms of Use
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-white transition hover:opacity-75">
                                Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-white transition hover:opacity-75">
                                DMCA Takedown Request
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </footer>

    )

}

export default Footer;