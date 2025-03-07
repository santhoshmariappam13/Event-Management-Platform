import React, { useState } from 'react';
import { loginUser } from '../services/api'; // Import the loginUser function

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(email, password);
      // Save the token to localStorage or handle the user data as needed
      localStorage.setItem('token', data.token); // Example of storing token
      // Redirect to home or dashboard
      window.location.href = '/';
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 via-green-600 to-teal-600">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105">
        <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">Login</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg">Email</label>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 p-2 border border-gray-300 rounded-md pl-10 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
              <span className="absolute left-3 top-3 text-gray-400">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-lg">Password</label>
            <div className="relative">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 p-2 border border-gray-300 rounded-md pl-10 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
              <span className="absolute left-3 top-3 text-gray-400">
                <i className="fas fa-lock"></i>
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md w-full hover:bg-blue-600 transition-colors duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;