import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SliderSection from './SliderSection';
import Loader from './sliderMovies/Loader';


const SinglePageDetails = () => {
    const [movie, setMovie] = useState([]);
    const [castData, setCastData] = useState([]);
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    useEffect(() => {

        const fetchMovie = async () => {
            setLoading(true)
            try {
                console.log(id);
                const response = await axios.get(`http://localhost:8000/movies/getSingleMovie/${id}&language=en-US`);
                const castRes = await axios.get(`http://localhost:8000/movies/getCastDetails/${id}`);
                const movieData = response.data
                const cast = castRes.data
                console.log(movieData, "movieData");
                console.log(cast, "castData");
                setMovie(movieData);
                setCastData(cast)
            } catch (error) {
                console.log(error);

            } finally {
                setLoading(false)
            }
        };

        fetchMovie();
    }, [id]);


    const gradientStyle = {
        background: `linear-gradient(to bottom right, rgba(31.5, 31.5, 52.5, 1), rgba(31.5, 31.5, 52.5, 0.84)),
        url(${movie.backdrop_path ? `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}` :
                `https://www.echollywell.co.uk/wp-content/uploads/blank-00cc00_040004000.png`})`,
    };


    console.log(gradientStyle, "gradientstyle bg");
    const filteredCrew = castData && castData.crew
        ? castData.crew.filter((crewMember) =>
            ["Director", "Screenplay"].includes(crewMember.job)
        )
        : [];
    console.log(filteredCrew, "crew");

    return (
        <>
            <div className='bg-no-repeat bg-cover' style={gradientStyle}>
                <div className='w-[93%] m-auto flex flex-col md:flex-row  py-10 justify-between'>
                    <div className='w-[50%] md:w-[25%] h-full mb-4'>
                        <div className='w-full  rounded-md h-[20rem] md:h-auto'>
                            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w440_and_h660_face/${movie.poster_path}` : `https://www.echollywell.co.uk/wp-content/uploads/blank-00cc00_040004000.png`} className='rounded-md w-full h-full ' alt="" />
                        </div>
                    </div>

                    <div className='w-3/3 md:w-[73%]  '>
                        <h1 className='text-3xl text-white pt-4 font-bold'>{movie.original_title}  <span className='font-normal text-gray-300'> {movie.release_date && new Date(movie.release_date).getFullYear()}</span></h1>

                        <p className='text-white text-[1rem] pt-3 flex items-center flex-wrap '>
                            <span className='border px-1 text-gray-500 mr-2 '>UA</span>
                            <span > {movie.release_date}</span>
                            {movie.production_countries && movie.production_countries.length > 0 ? (
                                movie.production_countries.map(country => (
                                    <span key={country.iso_3166_1} className="ml-1">({country.iso_3166_1})</span>
                                ))
                            ) : (
                                ''
                            )}
                            <span className='mx-2 font-extrabold'>.</span>
                            {movie.genres && movie.genres.length > 0 ? (
                                movie.genres.map(country => (
                                    <span key={country.id}> {country.name} ,</span>
                                ))
                            ) : (
                                ''
                            )}
                            <span className='mx-2 font-extrabold'>.</span>
                            <span>  {Math.floor(movie.runtime / 60)}h {Math.floor(movie.runtime % 60)}m</span>
                        </p>
                        <div className='flex items-center pt-5 gap-3 flex-wrap mb-1'>
                            <div className=" bg-sky-950 text-lg font-bold text-white rounded-full w-9 h-9 p-8 flex items-center justify-center border hover:scale-110 transition-all cursor-pointer">
                                {movie.vote_average * 10 === 0 ? 'NR' : `${(movie.vote_average * 10).toFixed()}%`}
                            </div>
                            <div className='font-bold text-white flex flex-col text-sm'>
                                <span>User </span> <span>Score</span>
                            </div>
                            <div className=" bg-sky-950 text-sm font-semibold text-white rounded-full w-11 h-11 p-3 flex items-center justify-center cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                            </div>
                            <div className=" bg-sky-950 text-sm font-semibold text-white rounded-full w-11 h-11 p-3  flex items-center justify-center cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                            </div>
                            <div className=" bg-sky-950 text-sm font-semibold text-white rounded-full w-11 h-11 p-3  flex items-center justify-center cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                </svg>
                            </div>
                            <div className=" bg-sky-950 text-sm font-semibold text-white rounded-full w-11 h-11 p-3 flex items-center justify-center cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                            </div>
                            <div className='flex gap-1 items-center text-white hover:text-gray-500 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                </svg>
                                <span className=' font-semibold  '>Play Trailer</span>
                            </div>
                        </div>
                        <h1 className='text-white pt-5 font-bold tracking-wider text-lg' >Overview</h1>
                        <p className='text-white text-md pt-3'>  {movie.overview}</p>

                        <div className='flex flex-wrap items-center justify-start gap-10 mt-5'>
                            {filteredCrew.map((crewMember, index) => (
                                <div className='flex flex-col mb-1' key={index}>
                                    <span className='text-white text-md font-bold '>{crewMember.name}</span>
                                    <span className='text-white text-sm '>{crewMember.job}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* cast details */}

            <div className='w-[96%] mx-auto '>
                <h1 className='font-semibold text-2xl pl-5 mt-6 '>Top Billed Cast</h1>
                <SliderSection>
                    {loading ? (
                        <>
                            <div className="flex gap-4 pb-5 px-5 overflow-x-auto ">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((index) => (
                                    <Loader key={index} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="flex gap-4 mb-5 px-5 overflow-x-auto pb-6">
                            {castData && castData.cast
                                ? castData.cast.map((data, index) => (
                                    <div className="flex flex-col gap-2 relative border rounded-md " key={index}>
                                        <img src={data.profile_path ? `https://image.tmdb.org/t/p/w440_and_h660_face/${data.profile_path}` :
                                            'https://www.echollywell.co.uk/wp-content/uploads/blank-00cc00_040004000.png'} alt={data.name}
                                            className="w-[9rem] h-[12rem] shadow-sm rounded-md cursor-pointer " />
                                        <div className="flex flex-col w-[9rem] px-3 pb-2">
                                            <h1 className="font-bold cursor-pointer hover:text-cyan-500">{data.name}</h1>
                                            <p className="font-normal text-sm ">{data.character}</p>
                                        </div>
                                    </div>
                                ))
                                : null}
                        </div>
                    )}
                </SliderSection>
            </div>


        </>
    );
}

export default SinglePageDetails;
