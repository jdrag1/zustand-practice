import React from 'react';
import useAuthStore from '../store.ts/authStore';

const Profile: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const logout = useAuthStore((state) => state.logout);

  if (!isLoggedIn) {
    return <p>Please log in.</p>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Welcome, {user.name}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;