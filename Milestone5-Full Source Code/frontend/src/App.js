// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import WorkoutPage from './components/WorkoutPage';
import StrengthPage from './components/StrengthPage';
import EndurancePage from './components/EndurancePage';
import './App.css';
import SetStrength from './components/SetStrength';
import SetEndurance from './components/SetEndurance';
import TrackStrength from './components/TrackStrength';
import TrackEndurance from './components/TrackEndurance';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/workout" element={<WorkoutPage />} />
          <Route path="/strength" element={<StrengthPage />} />
          <Route path="/endurance" element={<EndurancePage />} />
          <Route path="/trackS" element={<TrackStrength />} />
          <Route path="/trackE" element={<TrackEndurance />} />
          <Route path="/setS" element={<SetStrength />} />
          <Route path="/setE" element={<SetEndurance />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;
