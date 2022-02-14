import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home/Home';
import Detail from './components/Detail';
import Login from './components/Login/Login';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes >
          <Route path="/login" element={<Login />}></Route>
          <Route path="/detail" element={<Detail />}> </Route>
          <Route path="/" element={<Home />}></Route>
        </Routes >
        <Footer />
      </Router>
    </div>
  );
}

export default App;
