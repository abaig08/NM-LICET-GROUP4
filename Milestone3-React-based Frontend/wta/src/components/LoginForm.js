// LoginForm.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/workout');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <br/>
        <br/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br/>
        <br/>
        <Button to="/workout" className="btn-login" text="Login" />
      </form>
    </div>
  );
};

export default LoginForm;
