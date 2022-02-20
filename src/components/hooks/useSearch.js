import React, { useState, useEffect } from "react";
import axios from "../axios";


const useSearch = (apiKey) => {
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if (query !== "") {
            console.log("not empty");
            async function fetchSearchResults() {
                const request = await axios.get(`search/movie/?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`);
                let results = request.data.results;
                setSearchResults(results);
                return results;
            }
            fetchSearchResults();
        }


    }, [query, apiKey]);
    return { query, searchResults, setQuery };
};
export default useSearch;
