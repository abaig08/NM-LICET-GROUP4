// SignupForm.js
import React from 'react';
import Button from './Button';
const SignupForm = () => {
  return (
    <div className="form-container">
      <form action="#" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br/>
        <br/>
        <label htmlFor="password">Set Password:</label>
        <input type="password" id="password" name="password" required />
        <br/>
        <br/>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required />
        <br/>
        <br/>
        <Button to="/workout" className="btn-login" text="Signup" />
      </form>
    </div>
  );
};

export default SignupForm;
