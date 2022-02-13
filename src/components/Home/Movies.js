import React from 'react'
import styled from 'styled-components'
import { selectPopular } from '../../features/movie/movieSlice'
import { useSelector } from 'react-redux'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Movies() {
    const popularMovies = useSelector(selectPopular);
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 3,
        autoplay: true

    }
    

    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                <Carousel {...settings}>

                    {popularMovies && popularMovies.map((popularMovie) =>
                        <Wrap key={popularMovie.id}>
                            <img src={popularMovie.CardImg} alt="" />
                        </Wrap>
                    )}
                </Carousel>


            </Content>
            test
        </Container>
    )
}

export default Movies

const Container = styled.div`

`
const Content = styled.div`
display:grid;
grid-gap:25px;
grid-template-columns:repeat(4,minmax(0,1fr));

`
const Wrap = styled.div`
border-radius:10px;
cursor:pointer;
img{
    border:4px solid transparent;
    border-radius:4px;
    width:100%;
    height:100%;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
    transition-duration:300ms;

    &:hover{
        border:4px solid rgba(249,249,249,0.8);
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
    overflow:visible;
}
button{
    z-index:1;

}
`

