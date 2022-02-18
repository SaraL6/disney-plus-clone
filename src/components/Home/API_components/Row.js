import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderSettings } from '../../../app/utils';
import useRow from '../../hooks/useRow'
function Row({ title, fetchUrl }) {
    const { medias } = useRow(fetchUrl);

    return (
        <>
            {medias.length > 0 && (
                <Container className='movieRows'>
                    <h4> {title} </h4>
                    <Carousel {...sliderSettings}>

                        {medias.map((media) =>

                            <Wrap key={media.id} >
                                <Link to={`/detail/${media.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/w500/${media.backdrop_path}`} alt="" />
                                </Link>
                            </Wrap>

                        )}

                    </Carousel>

                </Container>)
            }
        </>
    )
}

export default Row

const Container = styled.div`

`

const Wrap = styled.div`
padding:10px;
border-radius:10px;
cursor:pointer;
img{
    border:4px solid transparent;
    border-radius:10px;
    width:100%;
    height:100%;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
    transition-duration:300ms;

    &:hover{
        transform:scale(1.05);
        border-color:rgba(249,249,249,0.8);
    }
}
`
const Carousel = styled(Slider)`
margin-top:20px;

ul lu button{
    &:before{
        font-size:10px;
        color:rgb(150,158,171);
    }
}

li.slick-active button:before{
    color:white;
}
.slick-list{
    overflow: unset;
}
button{
    z-index:1;

}
`
