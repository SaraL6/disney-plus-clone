import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home/Home';
import Detail from './components/Detail';
import Login from './components/Login/Login';
import { auth, provider } from "./firebase";
import { selectUserName, selectPhoto, selectEmail, setUserLogin, setSignOut } from './features/user/userSlice'
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  const userName = useSelector(selectUserName);
  let isAuthenticated;

  (userName != null && userName !== "") ? isAuthenticated = true : isAuthenticated = false;
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes >

          <Route path="/login" element={<Login />}></Route>
          <Route path="/detail/:id" element={<Detail />}> </Route>
          {userName}
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate replace to="/login" />}>
          </Route>

        </Routes >
        <Footer />
      </Router>
    </div>
  );
}

export default App;
