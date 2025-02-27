import React, { useState } from 'react';
import useAuthStore from '../store.ts/authStore';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = useAuthStore((state) => state.login);

  const handleLogin = async () => {
    // Simulate login request to your backend
    const simulatedResponse = {
      token: 'your_auth_token',
      user: { id: 1, name: 'John Doe' },
    };

    login(simulatedResponse.token, simulatedResponse.user);
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;