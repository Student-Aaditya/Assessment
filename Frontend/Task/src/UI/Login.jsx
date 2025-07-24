import React, { useState } from 'react';
import './Login.css';
import Nav from './Nav';

function Login() {
  const [name, setname] = useState('');
  const [password, setpassword] = useState('');

  return (
    <>
    <Nav/>
    <div className="sign-container">
      <form className="sign-form">
        <h2>Login</h2>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter the Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter the Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
}

export default Login;
