import React, { useEffect } from 'react'
import styled from 'styled-components'
import { selectUserName, selectPhoto, selectEmail, setUserLogin, setSignOut } from '../features/user/userSlice'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth, provider } from "../firebase";
import { Link } from 'react-router-dom';

function Header() {
    const dispatch = useDispatch();
    const history = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectPhoto);
    let path = window.location.pathname.split('/')[1];

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                history("/");
            }
        })
    }, [])

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                let user = result.user;
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                history("/");
            });

    }
    const signOut = () => {
        auth.signOut()
            .then(() => {
                dispatch(setSignOut());
                history("/login");
            })

    }

    return (
        <Nav style={{ background: path === 'detail' ? 'transparent ' : '#090b13' }}>
            <Link to={"/"}>
                <Logo src="/images/logo.svg" />
            </Link>
            {!userName ? (
                <LoginContainer>
                    <Login onClick={signIn}>Login</Login>
                </LoginContainer>
            ) :
                <>
                    <NavMenu>


                        <Link to={"/"}>
                            <img src="/images/home-icon.svg" alt="" />
                            <span>HOME</span>
                        </Link>


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
                    {!userPhoto ?
                        <UserImg src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"></UserImg> :
                        <UserImg rel="noreferrer" src={userPhoto} onClick={signOut}></UserImg>

                    }

                </>

            }


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
        font-weight: 600;
        letter-spacing: 3.42px;
        position: relative;
        
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

const Login = styled.div`
border:1px solid #f9f9f9;
padding:8px 16px;
border-radius:4px;
letter-spacing:1.5px;
text-transform: uppercase;
background-color:rgba(0,0,0,0.6);
transition:all 0.2s ease 0s;
cursor:pointer;

&:hover{
    background-color:#f9f9f9;
    color:#000;
    border-color:transparent;
}
`

const LoginContainer = styled.div`
flex:1;
display:flex;
justify-content:flex-end;
`