import axios from "axios";

const api_key = "2374e1b4236c522cbc5011efab33785d"

export const getTranding = async (req, res) => {
    try {
        console.log(api_key, "apikey");
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



export const getSingleMovie = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id, "id");
        if (!id) return res.status(400).json({ error: "Id is required!" })
        const movies = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`);
        if (!movies) return res.json({ error: "Movie not found!" })
        console.log(movies.data, "movie data");
        return res.json(movies.data);
    } catch (error) {
        console.error(error);
        return res.status(500).json("Internal server error!");
    }
};


export const getCastDetails = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id, "id");
        if (!id) return res.status(400).json({ error: "Id is required!" })
        const movies = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`);
        if (!movies) return res.json({ error: "Movie not found!" })
        console.log(movies.data, "movie data");
        return res.json(movies.data);
    } catch (error) {
        console.error(error);
        return res.status(500).json("Internal server error!");
    }
};


export const searchMovie = async (req, res) => {
    try {
        console.log("hii");
        console.log("Received search query:", req.body.movie);
        const movie = req.body.movie;
      
        const searchMovie = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${movie}&include_adult=false&language=en-US&page=1`);

        console.log("Movie API Response:", searchMovie.data);
        return res.json(searchMovie.data);


    } catch (error) {
        console.error(error);
        return res.status(500).json("Internal server error!");
    }

}
