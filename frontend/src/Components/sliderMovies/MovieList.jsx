import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const fetchTrendingMovies = async () => {
            try {
                console.log("inside fetchTranding");
                const response = await axios.get('http://localhost:5000/movies/getTranding');
                const newMovies = response.data.results;
                console.log(newMovies,"newmovies");
                setMovies((prevMovies) => [...prevMovies, ...newMovies]);
            } catch (error) {
                console.error("Error occured while fetching trending movies:", error);
            }
        };

        fetchTrendingMovies();
    }, []);

    return (
        <>
            <div className="flex px-5 overflow-x-auto">
                {movies.map((movie, index) => (
                    <MovieCard key={index} title={movie.title} date={movie.release_date} imgURL={`https://image.tmdb.org/t/p/w440_and_h660_face/${movie.poster_path}`} />
                ))}
            </div>
        </>
    );
};

export default MovieList;
