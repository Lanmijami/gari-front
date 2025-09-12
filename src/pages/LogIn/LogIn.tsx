import React, { useState } from 'react';
import '../LogIn/Login.css';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login success', data);

        if (data.token) {
          localStorage.setItem('token', data.token);
        }

        window.location.href = '/#/Home';
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      console.log('Error loggin in', err);
      setError('Something went wrong');
    }
  };

  return (
    <div className="login-helper">
      <div className="login-container">
        <form className="form" onSubmit={handleLogin}>
          <h1>Log in:</h1>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-button">
            Log in
          </button>

          {error && <p style={{ color: 'red', fontSize: '30px' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LogIn;
