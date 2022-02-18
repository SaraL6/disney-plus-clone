import React from 'react'
import styled from 'styled-components'


function BrandsCard({ image, video }) {
  return (
    <div>
      <Wrap>
        <img src={image} alt="" />
        <BrandVideo
          className=""
          width="320"
          height="240"
          loop={true}
          playsInline={true}
          muted
          onMouseOver={(event) => event.target.play()}
          onMouseOut={(event) => event.target.pause()}
        >
          <source src={video} type="video/mp4"></source>
        </BrandVideo>
      </Wrap>
    </div>

  )
}

export default BrandsCard
const BrandVideo = styled.video`
  display: block;
  height: 100%;
  bottom: 0px;
  position: absolute;
  object-fit: cover;
  left: 0px;
  opacity: 0;
  right: 0px;
  top: 0px;
  border-radius: 4px;
  transition: opacity 150ms ease-in-out 0s;
  width: 100%;
`
const Wrap = styled.div`
border-radius:10px;
cursor:pointer;
border: 3px solid rgba(249,249,249,0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
 rgb(0 0 0 / 73%) 0px 16px 10px -10px;
 transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
 position:relative;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
        position: relative;
        z-index: 1;
        pointer-events: none;
        max-width: 100%;

    }
    &:hover{
        transform:scale(1.05);
        border-color:rgba(249,249,249,0.8);

        ${BrandVideo}{
          opacity: 1;

        }
    }

`
