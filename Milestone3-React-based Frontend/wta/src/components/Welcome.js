// Welcome.js
import React from 'react';
import Header from './Header.js';
import Button from './Button.js';
const Welcome = () => {
  return (
    <div className="container">
      <Header title="Welcome to Workout Tracker Application"/>
      <Button to="/login" className="btn-login" text="Login" />
        <Button to="/signup" className="btn-signup" text="Sign Up" />
    </div>
  );
};

export default Welcome;
