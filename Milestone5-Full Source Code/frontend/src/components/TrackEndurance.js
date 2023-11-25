import React, { useState } from 'react';

function TrackEndurance() {
    const [trackedWorkouts, setTrackedWorkouts] = useState(null);

    const trackEnduranceWorkouts = () => {
        const date = document.getElementById('trackDate').value;

        fetch(`https://nm-group4.uc.r.appspot.com/getEndurance?date=${date}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Data:', data);
                setTrackedWorkouts(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <h1>Endurance Tracking</h1>
            <input type="date" id="trackDate" />
            <br/>  <br/>
            <button className='btn btn-signup' onClick={trackEnduranceWorkouts}>Track Workouts</button>
            <div id="trackedWorkouts">
                {trackedWorkouts && (
                    <div>
                        <p>Date: {trackedWorkouts.date}</p>
                        <p>Workout: {trackedWorkouts.workout}</p>
                        <p>Duration: {trackedWorkouts.duration}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TrackEndurance;
