import React from "react";
import styled from 'styled-components'

const Footer = () => {
    return (
        <Footers>
            <p>
                Website developed by
                <a target="_blank" href="#"> Sara Lachgar</a> - No
                commercial purporses intended, made only for showing web development techniques and to be included as a piece of portfolio. All copyrights are owned by Disney.<br />
                This product uses the TMDb API but is not endorsed or certified by TMDb.
            </p>
            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Db Logo" />
        </Footers>
    );
};

export default Footer;


const Footers = styled.footer` 
    color: white;
    text-align: center;
    padding: 20px;
    position: relative;
  }
   a {
    color: inherit;
  }
   img {
    width: 100px;
    margin-top: 11px;
  }
   p {
    font-size: 12px;
    opacity: .4;
  }
  @media (min-width: 992px) {
    footer p {
      font-size: 14px;
      max-width: 700px;
      margin: 0 auto;
    }
  
  `