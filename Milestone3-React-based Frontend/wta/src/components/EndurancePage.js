// StrengthPage.js
import React from 'react';
import Button from './Button';
const EndurancePage = () => {
  return (
    <div className="container">
      <h1>Endurance Workouts</h1>
      <Button to="/trackE" className="btn-login" text="Track Endurance Workouts" />
      <Button to="/setE" className="btn-login" text="Set Endurance Workouts" />
    </div>
  );
};

export default EndurancePage;


