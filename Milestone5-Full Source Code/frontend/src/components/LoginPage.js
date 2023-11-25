// LoginPage.js
import Header from './Header';
import React from 'react';
import LoginForm from './LoginForm';


const LoginPage = () => {

  return (
    <div className="container">
      <Header title="Login" />
      <h4>Enter the username as user and password as password to login.</h4>
      <LoginForm  />
    </div>
  );
};

export default LoginPage;
