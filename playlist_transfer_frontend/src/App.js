import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import HomePage from './components/HomePage';
import SourceOne from './components/SourceOne';
import SourceTwo from './components/SourceTwo';
import Login from './components/Login';
import Playlists from './components/Playlists';
import SampleComponent from './components/SampleComponent';
import Logout from './components/Logout';

const SpotifyToApple = () => {
  return <div>Spotify to Apple Music Transfer Page</div>;
};

const AppleToSpotify = () => {
  return <div>Apple Music to Spotify Transfer Page</div>;
};

const App = () => {
  return (
    <Auth0Provider
      domain="dev-thd5lwekduk33ij8.us.auth0.com"
      clientId="cdwoxhW5spnIsOCamhWOoiVeppFe183g"
      redirectUri={window.location.origin}
    >
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/SourceOne" element={<SourceOne />} />
          <Route path="/Playlists" element={<Playlists />} />
          <Route path="/SourceTwo" element={<SourceTwo />} />
          <Route path="/SampleComponent" element={<SampleComponent />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/transfer/spotify-to-apple" element={<SpotifyToApple />} />
          <Route path="/transfer/apple-to-spotify" element={<AppleToSpotify />} />
        </Routes>
      </Router>
    </Auth0Provider>
  );
};
export default App;
