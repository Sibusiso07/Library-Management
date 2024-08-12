import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  // Hook Navigate.
  const navigate = useNavigate();

  // States.
  const [email, setEmail] = useState('sibu@email.com');
  const [password, setPassword] = useState('admin123');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", {
        username: email,
        password: password
       });
       const results = response.data;
      if (results.message === 'Login Successful') {
        // Handle login success
        navigate('/Dashboard');
      } else {
        console.log("Unable to login");
      }
    } catch (error) {
      // Handle login failure
      console.error('Login failed', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/library.jpg')" }}>
      <div className="max-w-md mx-auto bg-green-100 p-6 rounded-md shadow-md">
        <div className="text-center mb-8 text-4xl font-extrabold text-teal-600">Library Management System</div>
        <h2 className="text-2xl font-bold mb-6 text-emerald-600 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-emerald-600">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-green-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-emerald-600">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-green-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <button type="submit" className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
