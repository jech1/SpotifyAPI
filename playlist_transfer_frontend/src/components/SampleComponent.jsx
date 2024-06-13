import React, { useEffect, useState } from 'react';
//This sample's components purpose is to be a simple example of how to fetch data from the backend
const SampleComponent = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/sample/')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
};

export default SampleComponent;