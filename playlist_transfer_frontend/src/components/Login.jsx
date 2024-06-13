import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
    const { loginWithRedirect } = useAuth0();
    
    return (
        <button onClick={() => loginWithRedirect()}>
        Log In
        </button>
    );
};

export default Login;

// Redirecting users to Auth0 login page
// done with the loginWithRedirect function from the useAuth0 hook