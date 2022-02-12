import React from 'react';

import './App.css';
import Header from './components/Header';
import Home from './components/Home/Home';
import Detail from './components/Detail'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes >
          <Route path="/detail" element={<Detail />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes >
      </Router>
    </div>
  );
}

export default App;
