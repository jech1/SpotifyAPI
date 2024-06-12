import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/HomePage';
import SourceOne from './components/SourceOne';
import SourceTwo from './components/SourceTwo';
import Login from './components/Login';
import Playlists from './components/Playlists';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Login" exact component={Login} />
          <Route path="/HomePage" exact component={Home} />
          <Route path="/SourceOne" component={SourceOne} />
          <Route path="/playlists" component={Playlists} />
          <Route path="/SourceTwo" component={SourceTwo} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
