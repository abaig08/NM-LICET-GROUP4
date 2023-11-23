// LoginPage.js
import Header from './Header';
import React from 'react';
import LoginForm from './LoginForm';


const LoginPage = () => {

  return (
    <div className="container">
      <Header title="Login" />
      <LoginForm  />
    </div>
  );
};

export default LoginPage;
