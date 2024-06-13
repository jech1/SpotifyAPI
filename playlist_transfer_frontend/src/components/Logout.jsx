import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default Logout;

// method to log out user
// done with the logout function from the useAuth0 hook