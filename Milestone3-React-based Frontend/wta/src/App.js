// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import WorkoutPage from './components/WorkoutPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/workout" element={<WorkoutPage />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;
