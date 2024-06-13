import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleSpotifyToAppleMusic = () => {
    navigate('/transfer/spotify-to-apple');
  };

  const handleAppleMusicToSpotify = () => {
    navigate('/transfer/apple-to-spotify');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Playlist Transfer</h1>
      <p style={styles.description}>Easily transfer your playlists between Spotify and Apple Music.</p>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleSpotifyToAppleMusic}>Transfer from Spotify to Apple Music</button>
        <button style={styles.button} onClick={handleAppleMusicToSpotify}>Transfer from Apple Music to Spotify</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
    padding: '0 20px',
  },
  title: {
    fontSize: '2.5em',
    marginBottom: '0.5em',
  },
  description: {
    fontSize: '1.2em',
    marginBottom: '2em',
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    cursor: 'pointer',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#1db954',
    color: '#fff',
    transition: 'background-color 0.3s ease',
  },
};

export default HomePage;