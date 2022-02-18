import React from 'react'
import styled from 'styled-components'
import BrandsCard from './BrandsCard';

function Brands() {
    const cards = [
        {
            brand: "disney",
            image:
                "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=600&aspectRatio=1.78&format=png",
            video:
                "https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564674844-disney.mp4",
        },
        {
            brand: "pixar",
            image:
                "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F4E1A299763030A0A8527227AD2812C049CE3E02822F7EDEFCFA1CFB703DDA5/scale?width=600&aspectRatio=1.78&format=png",
            video:
                "https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676714-pixar.mp4",
        },
        {
            brand: "marvel",
            image:
                "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/scale?width=600&aspectRatio=1.78&format=png",
            video:
                "https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676115-marvel.mp4",
        },
        {
            brand: "star-wars",
            image:
                "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=600&aspectRatio=1.78&format=png",
            video:
                "https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/04/03/1585929840-star-wars.mp4",
        },
        {
            brand: "national-geographic",
            image:
                "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2EF24AA0A1E648E6D1A3B26491F516632137ED87AB22969D153316F8BD670FB5/scale?width=600&aspectRatio=1.78&format=png",
            video:
                "https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676296-national-geographic.mp4",
        },
    ];
    return (

        <Container>
            {cards.map((card) => {
                return <Card key={card.brand} image={card.image} video={card.video} />

            })}
        </Container>

    )
}

export default Brands

const Container = styled.div`
    margin-top:30px;
    display:grid;
    grid-gap:25px;
    padding:30px 0px 26px;
    grid-template-columns:repeat(5,minmax(0,1fr));
`

const Card = styled(BrandsCard)`
border-radius:10px;
cursor:pointer;
border: 3px solid rgba(249,249,249,0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
 rgb(0 0 0 / 73%) 0px 16px 10px -10px;
 transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
 position: relative;  margin: 0 8px;
 margin-top: 15px;
 transform: scale(1);

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    &:hover{
        transform:scale(1.05);
        border-color:rgba(249,249,249,0.8);
    }

`