import React, { useState } from 'react';

const SetStrength = () => {
    const [date, setDate] = useState('');
    const [workout, setWorkout] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');

    const setStrengthWorkout = () => {
        const formData = {
            date: date,
            workout: workout,
            sets: sets,
            reps: reps
        };

        fetch('https://nm-group4.uc.r.appspot.com/setStrength', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response from the server
                console.log(data);
            })
            .catch(error => {
                // Handle any errors
                console.error(error);
            });
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Set Strength Workouts</h1>
            <form id="strengthWorkoutForm">
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                <br/>
                <div className="mb-3">
                    <label htmlFor="workout" className="form-label">Workout:</label>
                    <input
                        type="text"
                        id="workout"
                        value={workout}
                        onChange={(e) => setWorkout(e.target.value)}
                        placeholder="e.g., Bench Press"
                        className="form-control"
                        required
                    />
                </div>
                <br/>
                <div className="mb-3">
                    <label htmlFor="sets" className="form-label">Sets:</label>
                    <input
                        type="number"
                        id="sets"
                        value={sets}
                        onChange={(e) => setSets(e.target.value)}
                        min="1"
                        className="form-control"
                        required
                    />
                </div>
                <br/>
                <div className="mb-3">
                    <label htmlFor="reps" className="form-label">Reps:</label>
                    <input
                        type="number"
                        id="reps"
                        value={reps}
                        onChange={(e) => setReps(e.target.value)}
                        min="1"
                        className="form-control"
                        required
                    />
                </div>
                <br/>
                <button type="button" className="btn btn-primary" onClick={setStrengthWorkout}>
                    Set Strength Workout
                </button>
            </form>
        </div>
    );
};

export default SetStrength;
