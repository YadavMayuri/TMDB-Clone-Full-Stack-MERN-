const Footer = () => {
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

                            <span className=" text-cyan-500  font-bold text-lg border py-2 px-4 rounded-md bg-white  ">
                                Mayuri_2521
                            </span>

                        </div>
                        <div>
                            <p className=" uppercase text-white font-bold">Services</p>

                            <ul className="mt-1 space-y-1 text-md">
                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        1on1 Coaching
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        Company Review
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        Accounts Review
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        HR Consulting
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        SEO Optimisation
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className=" uppercase text-white font-bold">Company</p>

                            <ul className="mt-1 space-y-1 text-md">
                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        About
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        Meet the Team
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        Accounts Review
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className=" uppercase text-white font-bold">Helpful Links</p>

                            <ul className="mt-1 space-y-1 text-md">
                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        Contact
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        FAQs
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        Live Chat
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className=" uppercase text-white font-bold">Legal</p>

                            <ul className="mt-1 space-y-1 text-md">
                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        Accessibility
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        Returns Policy
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        Refund Policy
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        Hiring Statistics
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