import axios from "axios";

const api_key = "2374e1b4236c522cbc5011efab33785d"

export const getTranding = async (req, res) => {
    try {
        console.log(api_key,"apikey");
        const MovieData = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`);
        // console.log(MovieData.data);
        return res.json(MovieData.data);
    } catch (error) {
        console.error(error);
        return res.status(500).json("Internal server error!");
    }

}


export const getNowPlaying = async (req, res) => {
    try {
        const MovieData = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`);
        // console.log(MovieData.data);
        return res.json(MovieData.data);
    } catch (error) {
        console.error(error);
        return res.status(500).json("Internal server error!");
    }

}


export const getPopularmovies = async (req, res) => {
    try {
        const MovieData = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`);
        console.log(MovieData.data);
        return res.json(MovieData.data);
    } catch (error) {
        console.error(error);
        return res.status(500).json("Internal server error!");
    }

}


export const getTopRated = async (req, res) => {
    try {
        const MovieData = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`);
        console.log(MovieData.data);
        return res.json(MovieData.data);
    } catch (error) {
        console.error(error);
        return res.status(500).json("Internal server error!");
    }

}

export const getUpcoming = async (req, res) => {
    try {
        const MovieData = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`);
        console.log(MovieData.data);
        return res.json(MovieData.data);
    } catch (error) {
        console.error(error);
        return res.status(500).json("Internal server error!");
    }

}

