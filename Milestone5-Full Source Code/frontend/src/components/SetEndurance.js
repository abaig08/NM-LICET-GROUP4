import React, { useState } from 'react';

const SetEndurance = () => {
    const [date, setDate] = useState('');
    const [workout, setWorkout] = useState('');
    const [duration, setDuration] = useState('');

    const setEnduranceWorkout = () => {
        const formData = {
            date: date,
            workout: workout,
            duration: duration
        };

        fetch('https://nm-group4.uc.r.appspot.com/setEndurance', {
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
            <h1 className="mb-4">Set Endurance Workouts</h1>
            <form id="enduranceWorkoutForm">
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
                        placeholder="e.g., Running"
                        className="form-control"
                        required
                    />
                </div>
                <br/>
                <div className="mb-3">
                    <label htmlFor="duration" className="form-label">Duration (minutes):</label>
                    <input
                        type="number"
                        id="duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        min="1"
                        className="form-control"
                        required
                    />
                </div>
                <br/>
                <button type="button" className="btn btn-login" onClick={setEnduranceWorkout}>
                    Set Endurance Workout
                </button>
            </form>
        </div>
    );
};

export default SetEndurance;
