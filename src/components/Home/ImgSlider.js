import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true

    }
    return (
        <Carousel {...settings}>
            <Wrap>
                <ImgTitle
                    src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F33AA99395CB84E547F8D4ED40D9328D48201FEAF1EF431E4EF3C2F7509A6D09/scale?width=1440&aspectRatio=3.91">

                </ImgTitle>
                <img src=
                    "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/83363D03F4F637E001C0FF3BE7AE5B6461E498E1673A2EB944276D6399263C01/scale?width=1440&aspectRatio=3.91&format=jpeg"

                    alt="" />
            </Wrap>
            <Wrap>
                <ImgTitle
                    src=
                    "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D650E8DB7537D1C7B607BD7D4046937FB96B8053448FD934D054B9782A95DDDF/scale?width=1440&aspectRatio=3.91 "
                ></ImgTitle>

                <img src=
                    "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2D79190EE1ECBA1C48713150D430582515E92D47E824FB15BBB53CEA30D9B3BA/scale?width=1440&aspectRatio=3.91&format=jpeg"
                    alt="" />
            </Wrap>
            <Wrap>
                <ImgTitle
                    src=
                    "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/816003FE6AD4DFC19E3CA024601A7179135744283C9571FFBE0AB05E5A3E25D7/scale?width=1440&amp;aspectRatio=3.91"></ImgTitle>
                <img src=
                    "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5E814613F6B18A9FE66B65EB49F75310A725668027051A9F502497124CE06B4B/scale?width=1440&aspectRatio=3.91&format=jpeg"
                    alt="" />
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider

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
    overflow: visible;
}
button{
    z-index:1;

}

.slick-slide:not(.slick-cloned).slick-active .slider__img {
    opacity: 1;
    transform: translateX(0px);
    transition: transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 420ms,
      opacity 950ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 420ms;
  }
`

const ImgTitle = styled.img`
position:absolute;
z-index:1;
transform: translateX(15px);
transition: transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 100ms;
`


const Wrap = styled.div`
cursor:pointer;
position: relative;

img{
    border:4px solid transparent;
    border-radius:4px;
    width:100%;
    height:100%;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
    transition-duration:300ms;
 

}
}

`