import React, { useEffect, useState } from 'react';
import api from '../api';

function Playlists() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    api.get('/playlists')
      .then((response) => {
        setPlaylists(response.data);
      });
  }, []);

  return (
    <div>
      <h1>Playlists</h1>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id}>{playlist.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Playlists;