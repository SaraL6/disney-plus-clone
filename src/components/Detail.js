import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import useDetail from '../components/hooks/useDetail'
import { apiKey } from "../app/utils"

function Detail() {
    const { id } = useParams();
    const { singleMovie } = useDetail(id, apiKey);
    let genres = singleMovie.genres;
    let releaseYear = singleMovie?.release_date?.split('-')[0];
    console.log(singleMovie);
    return (
        <>
            {singleMovie &&
                <Container>
                    <Background>
                        {singleMovie?.backdrop_path &&
                            <img src={`https://image.tmdb.org/t/p/w1280/${singleMovie?.backdrop_path}`} alt="" />
                        }
                    </Background>
                    <ImageTitle>
                        <h2>{singleMovie.title} </h2>
                    </ImageTitle>
                    <Controls>
                        <PlayButton>
                            <img src="/images/play-icon-black.png" alt="" />
                            <span>PLAY</span>
                        </PlayButton>
                        <TrailerButton>
                            <img src="/images/play-icon-white.png" alt="" />
                            <span>Trailer</span>
                        </TrailerButton>
                        <AddButton>
                            <span>+</span>
                        </AddButton>
                        <GroupWatchButton>
                            <img src="/images/group-icon.png" alt="" />
                        </GroupWatchButton>
                    </Controls>
                    <SubTitle>

                        <span> {releaseYear} • </span>
                        <span> {singleMovie.runtime} minutes  • </span>
                        <span> {genres && genres.map((genre) => { return genre.name }).join("  •  ")}

                        </span>
                    </SubTitle>
                    <Description>
                        {singleMovie.overview}
                    </Description>
                </Container>}
        </>
    )
}

export default Detail

const Container = styled.div`
min-height:calc(100vh - 70px);
padding:0 calc(3.5vw + 5px);
position:relative;
`

const Background = styled.div`
position:fixed;
top:0;
left:0;
bottom:0;
right:0;
z-index:-1;
opacity:0.6;
img{
    object-fit:cover;
    width:100%;
}

`

const ImageTitle = styled.div`
align-items: flex-end;
display: flex;
-webkit-box-pack: start;
justify-content: flex-start;
margin: 0px auto;
height: 24vw;
font-size:50px;

h2{
    margin: 22px 0px;
}

`

const Controls = styled.div`
display :flex;
align-items:center;

`
const PlayButton = styled.button`
border-radius:4px;
font-size:15px;
padding:0px 24px;
margin-right:22px;
display:flex;
align-items:center;
height:56px;
background:rgb(249,249,249);
border:none;
letter-spacing:1.8px;
cursor:pointer;

&:hover{
    background:rgb(198,198,198);
}

`
const TrailerButton = styled(PlayButton)`
background:rgba(0,0,0,0.3);
border:1px solid rgb(249,249,249);
color:rgb(249,249,249);
text-transform:uppercase;
`
const AddButton = styled.button`
margin-right:16px;
width:44px;
height:44px;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
border:2px solid white;
background-color:rgba(0,0,0,0.6);
cursor:pointer;
span{
    font-size:30px;
    color:white;
}
`
const GroupWatchButton = styled(AddButton)`
background:rgb(0,0,0);
`

const SubTitle = styled.div`
color: rgb(249,249,249);
font-size:15px;
min-height:20px;
margin-top:26px;
span{
    padding:5px;
}
`

const Description = styled.div`
line-height:1.4;
font-size:20px;
margin-top:16px;
color:rgb(249,249,249);
max-width:760px;
`