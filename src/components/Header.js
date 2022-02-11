import React from 'react'
import styled from 'styled-components'
function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a href="#">
                    <img src="/images/home-icon.svg" alt="" />
                    <span>HOME</span>
                </a>
                <a href="#">
                    <img src="/images/search-icon.svg" alt="" />
                    <span>SEARCH</span>
                </a>

                <a href="#">
                    <img src="/images/watchlist-icon.svg" alt="" />
                    <span>WATCHLIST</span>
                </a>

                <a href="#">
                    <img src="/images/original-icon.svg" alt="" />
                    <span>ORIGINALS</span>
                </a>
                <a href="#">
                    <img src="/images/movie-icon.svg" alt="" />
                    <span>MOVIES</span>
                </a>
                <a href="#">
                    <img src="/images/series-icon.svg" alt="" />
                    <span>SERIES</span>
                </a>
            </NavMenu>

            <UserImg src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"></UserImg>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
height:70px;
background:#090b13;
display:flex;
align-items:center;
padding:0 36px;
overflow-x:hidden;
`
const Logo = styled.img`
width:80px;

`
const NavMenu = styled.div`
display:flex;
flex:1;
margin-left:25px;
a{
    text-decoration:none;
    display:flex;
    color:white;
    align-items:center;
    padding:0 12px;
    cursor:pointer;

    img{
        height:20px;
    }

    span{
        font-size: 13px;
        letter-spacing:1.42px;
        position:relative;
        
        &:after{
            content:"";
            height:2px;
            background:white;
            position:absolute;
            right:0;
            left:0;
            bottom:-6px;
            opacity:0;
            transform-origin:left center;
            transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            transform:scaleX(0);

        }

    }

    &:hover{
        span:after{
            transform:scaleX(1);
            opacity:1;
        }
    }
}

`
const UserImg = styled.img`
width:40px;
height:48px;
border-radius:50%;
cursor:pointer;
`