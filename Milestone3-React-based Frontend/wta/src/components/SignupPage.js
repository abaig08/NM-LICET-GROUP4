// SignupPage.js
import Header from './Header';
import React from 'react';
import SignupForm from './SignupForm';


const SignupPage = () => {


  return (
    <div className="container">
      <Header title="Sign Up" />
      <SignupForm />
    </div>
  );
};

export default SignupPage;
