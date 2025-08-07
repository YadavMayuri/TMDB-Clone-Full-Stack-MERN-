import axios from 'axios';
import { useState } from 'react';
import Toast from "react-hot-toast";

const HeroSection = () => {

    const [movie, setMovie] = useState('');


    const handleSearch = async () => {
        try {
            console.log("inside search");

            const response = await axios.post("https://tmdb-clone-full-stack-mern.onrender.com/movies/searchMovie", { movie: movie })

            const movieData = response.data;
            console.log(movieData, "inside movie data");

            if (movieData.results && movieData.results.length > 0) {
                // Assuming the first result is the desired movie
                const movieId = movieData.results[0]?.id;

                if (movieId) {
                    // Redirect to the movie detail page using window.location.href
                    window.location.href = `/singlepagedetails/${movieId}`;
                    setMovie('')

                } else {
                    console.log('No movie ID found');
                }
            } else {
                Toast.error('No results found');
                // setMovie('')
            }
        } catch (error) {
            console.error(error);
            // Handle error
        }
    };

    const gradientStyle = {
        background: 'linear-gradient(90deg, rgba(3,37,65,0.84375) 100%, rgba(3,37,65,0.8997724089635855) 100%), url(https://images5.alphacoders.com/532/532559.jpg)',
        backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
    };

    return (
        <>
            <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-14" style={gradientStyle}>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none">
                        <div className="">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl pt-12">Welcome.</h2>
                            <h4 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl  pt-6">Millions of movies, TV shows and people to discover. Explore now..</h4>

                            <div className="mt-10 flex ">
                                <label htmlFor="email-address" className="sr-only">
                                    Search for a movie...
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="min-w-0 flex-auto rounded-tl-2xl rounded-bl-2xl  border-0 bg-white px-3.5 py-2 shadow-sm ring-white/10 focus:outline-none md:text-md sm:leading-2 "
                                    placeholder='Search for a movie...'
                                    value={movie}
                                    onChange={(e) => setMovie(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            handleSearch();
                                        }
                                    }}
                                />
                                <button
                                    type="submit"
                                    className="flex-none  bg-gradient-to-r from-emerald-300 to-cyan-600 px-10 py-2.5 text-md 
                                    font-bold text-white shadow-sm focus-visible:outline focus-visible:outline-2 
                                    focus-visible:outline-offset-2 rounded-tr-2xl rounded-br-2xl hover:text-black"
                                    onClick={handleSearch}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                    <div
                        className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </>
    );
}

export default HeroSection;
