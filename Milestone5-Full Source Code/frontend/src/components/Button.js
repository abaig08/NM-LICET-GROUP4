// Button.js
import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, className, text }) => {
  return (
    <Link to={to} className={`btn ${className}`}>
      {text}
    </Link>
  );
};

export default Button;
