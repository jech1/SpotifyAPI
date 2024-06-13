import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SampleComponent = () => {
    const { getAccessTokenSilently } = useAuth0();
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const fetchPlaylists = async () => {
            try {
                const token = await getAccessTokenSilently();
                const response = await fetch('http://127.0.0.1:8000/api/playlists/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                setPlaylists(data);
            } catch (error) {
                console.error('Error fetching playlists:', error);
            }
        };

        fetchPlaylists();
    }, [getAccessTokenSilently]);

    return (
        <div>
            <h1>Playlists</h1>
            <ul>
                {playlists.map(playlist => (
                    <li key={playlist.id}>{playlist.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SampleComponent;

// component fetches playlist data from the API
// done with the getAccessTokenSilently function from the useAuth0 hook and the fetch API
// token included in the Authorization header to authenticate the request