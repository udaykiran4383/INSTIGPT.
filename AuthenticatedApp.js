import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AuthenticatedApp({ onLogout }) {
  const [user, setUser] = useState({ username: 'Guest' }); // Provide a default value
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/user');
        setUser(response.data.user);
      } catch (error) {
        // Handle error, for example, by setting an error state
        setError('An error occurred while fetching user data.');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get('/logout');
      onLogout();
    } catch (error) {
      // Handle error
      setError('An error occurred while logging out.');
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h2>Welcome, {user?.username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default AuthenticatedApp;

