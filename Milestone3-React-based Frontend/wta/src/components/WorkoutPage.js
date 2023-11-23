// WorkoutPage.js
import React from 'react';
import Button from './Button';
const WorkoutPage = () => {
  return (
    <div className="container">
      <h1>Track Workouts</h1>
      <Button to="/strength" className="btn-login" text="Strength" />
      <Button to="/endurance" className="btn-login" text="Endurance" />
    </div>
  );
};

export default WorkoutPage;
