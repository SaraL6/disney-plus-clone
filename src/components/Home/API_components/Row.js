import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderSettings } from '../../../app/utils';
import useRow from '../../hooks/useRow'
import SingleMovie from './SingleMovie';
function Row({ title, fetchUrl }) {
    const { medias } = useRow(fetchUrl);
    console.log(medias)
    return (
        <>
            {medias.length > 0 && (
                <Container className='movieRows'>
                    <h4> {title} </h4>
                    <Carousel {...sliderSettings}>

                        {medias.map((media) =>

                            <SingleMovie key={media.id} id={media.id} poster={media.backdrop_path} title={media.title} name={media.name} />

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
.slick-slide:not(.slick-active) {
    opacity: 0.5;
  }
`
