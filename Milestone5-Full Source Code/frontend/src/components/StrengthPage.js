// StrengthPage.js
import React from 'react';
import Button from './Button';
const StrengthPage = () => {
  return (
    <div className="container">
      <h1>Strength Workouts</h1>
      <Button to="/trackS" className="btn-login" text="Track Strength Workouts" />
      <Button to="/setS" className="btn-login" text="Set Strength Workouts" />
    </div>
  );
};

export default StrengthPage;


