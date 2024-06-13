//import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/HomePage';
import SourceOne from './components/SourceOne';
import SourceTwo from './components/SourceTwo';
import Login from './components/Login';
import Playlists from './components/Playlists';
import SampleComponent from './components/SampleComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" exact component={Login} />
        <Route path="/HomePage" exact component={Home} />
        <Route path="/SourceOne" component={SourceOne} />
        <Route path="/Playlists" component={Playlists} />
        <Route path="/SourceTwo" component={SourceTwo} />
        <Route path="/SampleComponent" component={SampleComponent} />
      </Routes>
    </Router>
  );
}


export default App;
