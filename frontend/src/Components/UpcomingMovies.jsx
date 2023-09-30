import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const UpcomingMovies = () => {
    
    const router = useNavigate()

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const fetchTrendingMovies = async () => {
            setLoading(true)
            try {
                const response = await axios.get('http://localhost:5000/movies/getUpcoming');
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
                console.error("An error occured while fetching data", error);
            }
            finally {
                setLoading(false)
            }
        };

        fetchTrendingMovies();
    }, []);


    return (
        <>
            <div className="w-[90%] m-auto ">
                <h1 className="my-6 font-bold text-2xl">Upcoming Movies</h1>


                {loading ? (
                    <>
                        <div className="  flex flex-wrap justify-between gap-2 ">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((index) => (
                                <div className="mb-10 shadow-md rounded-md " key={index}>
                                    <img src="https://fl-1.cdn.flockler.com/embed/no-image.svg" alt="" className="w-[10rem] h-[14rem] shadow-sm rounded-md object-cover" />

                                </div>
                            ))}
                        </div>

                    </>
                ) : (
                    <div className="  flex flex-wrap justify-between gap-2  ">
                        {movies.map((movie, index) => (
                            <div className="mb-10 shadow-md rounded-md cursor-pointer border " key={index} onClick={()=> router(`/singlepagedetails/${movie.id}`)}  >
                                <img src={`https://image.tmdb.org/t/p/w440_and_h660_face/${movie.poster_path} `} alt={movie.title} className="w-[10rem] h-[14rem] shadow-sm rounded-md" />
                                <div className="flex flex-col w-[10rem] px-2 py-3">
                                    <h1 className="font-bold hover:text-cyan-500">{movie.title}</h1>
                                    <p className="font-normal text-slate-400 text-sm">{movie.release_date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div >


        </>
    )
}

export default UpcomingMovies;