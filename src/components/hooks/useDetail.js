import React, { useState, useEffect } from "react";
import axios from "../axios";


const useDetail = (movieId, apiKey) => {
    const [singleMovie, setSingleMovie] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);

        async function fetchSingleMovie() {
            const request = await axios.get(`movie/${movieId}?api_key=${apiKey}&language=en-US`);
            setSingleMovie(request.data);
            return request;
        }
        fetchSingleMovie();
    }, [movieId, apiKey]);
    return { singleMovie };
};
export default useDetail;
