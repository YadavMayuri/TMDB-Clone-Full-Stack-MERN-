import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import Loader from "./Loader";

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const fetchTrendingMovies = async () => {
            setLoading(true)
            try {
                console.log("inside fetchTranding");
                const response = await axios.get('http://localhost:5000/movies/getTranding');
                const newMovies = response.data.results;
                console.log(newMovies, "newmovies");
                // Format the release_date before setting it in the state
                const formattedMovies = newMovies.map(movie => ({
                    ...movie,
                    release_date: new Date(movie.release_date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric"
                    })
                }));

                setMovies((prevMovies) => [...prevMovies, ...formattedMovies]);

            } catch (error) {
                console.error("Error occured while fetching trending movies:", error);
            } finally {
                setLoading(false)
            }
        };

        fetchTrendingMovies();
    }, []);

    return (
        <>

            {loading ? (
                <>
                    <div className="flex px-5 overflow-x-auto ">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                            <Loader key={index} />
                        ))}
                    </div>

                </>
            ) : (
                <>
                    <div className="flex px-5 overflow-x-auto ">
                        {movies.map((movie, index) => (
                            <MovieCard key={index} title={movie.title} date={movie.release_date} rating={movie.vote_average * 10 === 0 ? 'NR' : `${(movie.vote_average * 10).toFixed()}%`} imgURL={`https://image.tmdb.org/t/p/w440_and_h660_face/${movie.poster_path}`} />
                        ))}
                    </div>

                </>
            )}

        </>
    );
};

export default MovieList;
