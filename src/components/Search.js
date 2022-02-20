import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { apiKey } from "../app/utils"
import useSearch from '../components/hooks/useSearch'
import SingleMovie from '../components/Home/API_components/SingleMovie';


function Search() {
    const { query, searchResults, setQuery } = useSearch(apiKey);

    return (
        <Container>
            <SearchBar>
                <input type="text" placeholder='Search by title, character or genre' onChange={(e) => setQuery(e.target.value)} />
            </SearchBar>

            <SearchResult>
                {query && searchResults.map((result) =>       
                                          
                        <MovieCard key={result.id} id={result.id} title={result.title} poster={result.backdrop_path} />                  
                )}

            </SearchResult>
        </Container>
    )
}

export default Search
const Container = styled.div`


`

const MovieCard = styled(SingleMovie)`
position:relative

`

const SearchBar = styled.div`
height:82px;
input{
    width:100%;
    height:100%;
    background:linear-gradient(180deg,#33353d,#4b4e5a);
    border:none;
    color:white;
    font-size: 27px;
    padding: 2px 28px;
    :focus{
        outline: none;
    }
    ::placeholder { 
        color: white;
     }
}
`

const SearchResult = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
`