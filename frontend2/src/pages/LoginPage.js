import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // ✅ Import

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // ✅ Hook for navigation
  
  const loginHandler = async () => {
    try {
      const response = await axios.post(
  'http://localhost:5000/api/users/login',
  {
    email,
    password,
  },
  {
    headers: {
      'Content-Type': 'application/json', // ✅ set content type
    },
  }
);
      const { token } = response.data;
      localStorage.setItem('token', token); // 🔐 Save JWT

      alert('✅ Login successful!');
      navigate('/home'); // ✅ Redirect to home page
    } catch (err) {
      console.error('Login error:', err);
      alert('❌ Login failed');
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />

      <button onClick={loginHandler}>Login</button>
    </div>
  );
};
