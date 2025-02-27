import React from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import useAuthStore from '../src/store.ts/authStore'

function App() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <div className="App">
      {isLoggedIn ? <Profile /> : <Login />}
    </div>
  );
}

export default App;