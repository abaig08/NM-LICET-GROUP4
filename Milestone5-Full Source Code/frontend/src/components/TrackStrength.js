import React, { useState } from 'react';

function TrackStrength() {
    const [trackedWorkouts, setTrackedWorkouts] = useState(null);

    const trackStrengthWorkouts = () => {
        const date = document.getElementById('trackDate').value;

        fetch(`https://nm-group4.uc.r.appspot.com/getStrength?date=${date}`)
            .then(response => response.json())
            .then(data => {
                setTrackedWorkouts(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
             <h1>Strength Tracking</h1>
            <input type="date" id="trackDate" />
            <br/>  <br/>
            <button  className="btn btn-primary" onClick={trackStrengthWorkouts}>Track Workouts</button>
            <div id="trackedWorkouts">
                {trackedWorkouts && (
                    <div>
                        <p>Date: {trackedWorkouts.date}</p>
                        <p>Workout: {trackedWorkouts.workout}</p>
                        <p>Sets: {trackedWorkouts.sets}</p>
                        <p>Reps: {trackedWorkouts.reps}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TrackStrength;
