// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Welcome from './components/Welcome';
// import LoginPage from './components/LoginPage';
// import SignupPage from './components/SignupPage';
// import WorkoutPage from './components/WorkoutPage';
// import StrengthPage from './components/StrengthPage';
// import EndurancePage from './components/EndurancePage';
// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Welcome />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<SignupPage />} />
//           <Route path="/workout" element={<WorkoutPage />} />
//           <Route path="/strength" element={<StrengthPage />} />
//           <Route path="/endurance" element={<EndurancePage />} />
//         </Routes>

//       </div>
//     </Router>
//   );
// };

// export default App;
import React, { useState } from 'react';

function App() {
  const today = new Date();
  const defaultDate = today.toISOString().split('T')[0]; // Format: "yyyy-mm-dd"

  const [selectedDate, setSelectedDate] = useState(defaultDate);
  const [strengthData, setStrengthData] = useState({
    date: defaultDate,
    workout: 'Bench Press',
    sets: 3,
    reps: 10,
  });

  const setStrength = async () => {
    try {
      const response = await fetch('http://localhost:8080/setStrength', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(strengthData),
      });

      if (response.ok) {
        console.log('Strength set successfully');
      } else {
        console.error('Failed to set strength');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  const getStrength = async () => {
    try {
      const response = await fetch(`http://localhost:8080/getStrength?date=${selectedDate}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const retrievedStrength = await response.json();
        console.log('Strength retrieved successfully:', retrievedStrength);
        setStrengthData(retrievedStrength); // Update state with retrieved strength data
      } else {
        console.error('Failed to get strength');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <div className="App">
      <h1>React Spring Boot Integration</h1>
      {/* Date selection input */}
      <label>Select Date:</label>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <br />
      <button onClick={setStrength}>Set Strength</button>
      <button onClick={getStrength}>Get Strength</button>
      {/* Display strength data on the screen */}
      <div>
        <h2>Strength Data:</h2>
        <pre>{JSON.stringify(strengthData, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
