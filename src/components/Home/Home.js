import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Movies from './Movies'
import Originals from './Originals'
import Brands from './Brands'
import Hollywood from './Hollywood'
import New from './New'
import KidsTv from './KidsTv'
import Trending from './Trending'
import Row from './API_components/Row'
import requests from '../../app/requests'
import db from '../../firebase'
import { setMovies } from '../../features/movie/movieSlice'
import { useDispatch } from 'react-redux'





function Home() {
  const dispatch = useDispatch();
  let populars = [];
  let hollywoods = [];
  let newTos = [];
  let kidsTvs = [];
  let originals = [];
  let trending = [];


  useEffect(() => {
    db.collection("Movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "popular":
            populars = [...populars, { id: doc.id, ...doc.data() }];
            break;
          case "hollywood":
            hollywoods = [...hollywoods, { id: doc.id, ...doc.data() }];
            break;
          case "newTo":
            newTos = [...newTos, { id: doc.id, ...doc.data() }];
            break;
          case "kidsTv":
            kidsTvs = [...kidsTvs, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;

          default:
            break;
        }

      });
      dispatch(setMovies({
        popular: populars,
        hollywood: hollywoods,
        newTo: newTos,
        kidsTv: kidsTvs,
        original: originals,
        trending: trending

      }));
    })

  }, [])



  return (
    <Container>
      <ImgSlider />
      <Brands />

      {/* <Movies />
      <Originals />
      <Hollywood/>
      <New/>
      <KidsTv/>
      <Trending/> */}

      {/* API Components */}
      <Row title={"Disney Movies"} fetchUrl={requests.fetchDisney}></Row>
      <Row title={"Action and Adventures"} fetchUrl={requests.fetchMarvel}></Row>
      <Row title={"Disney Series"} fetchUrl={requests.fetchDisneySeries}></Row>
      <Row title={"Pixar Movies"} fetchUrl={requests.fetchPixar}></Row>
      <Row title={"Pixar Music"} fetchUrl={requests.fetchMusicPixar}></Row>
      <Row title={"Disney Classics"} fetchUrl={requests.fetchDisneyClassics}></Row>
    </Container>
  )
}

export default Home

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 48px);
  overflow-x:hidden;
  &:before{
    background: url('/images/home-background.png') center center / cover
     no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

  }

`
