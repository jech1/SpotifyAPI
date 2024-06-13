//import logo from './logo.svg';
//commented it out because it was causing an error due to not being used
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/HomePage';
import SourceOne from './components/SourceOne';
import SourceTwo from './components/SourceTwo';
import Login from './components/Login';
import Playlists from './components/Playlists';
import SampleComponent from './components/SampleComponent';
import { Auth0Provider } from '@auth0/auth0-react';
import SampleComponent from './components/SampleComponent';
import Logout from './components/Logout';

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
        <Route path="/Logout" component={Logout} />
      </Routes>
    </Router>
  );
}

const App = () => {
  return (
    <Auth0Provider
    //The domain and clientId are specific to your Auth0 application
    //Have to add our own info into here 
      domain="dev-6xq9vz6q.us.auth0.com"
      clientId="v6z2wZ9VdXv9G7J6u6Q4qT4JtJm2l4s0"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  );
};


export default App;
