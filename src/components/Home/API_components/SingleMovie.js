import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


function SingleMovie({ id, poster, title, name }) {


    return (
        <Wrap key={id} >
            <div>
                <Link to={`/detail/${id}`}>
                    <MovieTitle>{title !== null ? title : name}</MovieTitle>
                    <img src={poster !== null ? `https://image.tmdb.org/t/p/w500/${poster}` : "../../../../images/noImage.png"} alt="" />
                </Link>
            </div>
        </Wrap>
    )
}

export default SingleMovie

const Wrap = styled.div`
padding:10px;
border-radius:10px;
cursor:pointer;
position:relative;

img{
    border:4px solid transparent;
    border-radius:10px;
    width:100%;
    height:100%;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
    transition-duration:300ms;
    opacity:0.85;

    &:hover{
        transform:scale(1.05);
        border-color:rgba(249,249,249,0.8);
        z-index: 3;
  

    }

   
}
`
const MovieTitle = styled.h3`
position: absolute;
z-index:1;
color: white;
    right: 0;
    left: 21px;
    bottom: 12px;
    font-size:14px;


`