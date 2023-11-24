function trackEnduranceWorkouts() {
  const trackDate = document.getElementById('trackDate').value;

  // Retrieve endurance workouts for the specified date (you can replace this with actual data retrieval logic)
  const trackedWorkouts = getEnduranceWorkoutsForDate(trackDate);

  // Display the tracked workouts
  displayTrackedWorkouts(trackedWorkouts);
}

function getEnduranceWorkoutsForDate(date) {
  // This is a placeholder function; replace it with actual data retrieval logic
  // For simplicity, using a hardcoded example
  const enduranceWorkouts = {
    '2023-01-01': [
      { workout: 'Running', duration: 30 },
      { workout: 'Cycling', duration: 45 }
    ],
    '2023-01-02': [
      { workout: 'Swimming', duration: 60 },
      { workout: 'Elliptical Trainer', duration: 40 }
    ]
    // Add more entries as needed
  };

  return enduranceWorkouts[date] || [];
}

function displayTrackedWorkouts(workouts) {
  const trackedWorkoutsContainer = document.getElementById('trackedWorkouts');
  trackedWorkoutsContainer.innerHTML = ''; // Clear previous content

  if (workouts.length === 0) {
    trackedWorkoutsContainer.innerHTML = '<p>No endurance workouts found for the specified date.</p>';
    return;
  }

  const workoutsList = document.createElement('ul');

  workouts.forEach(workout => {
    const workoutItem = document.createElement('li');
    workoutItem.textContent = `${workout.workout} - ${workout.duration} minutes`;
    workoutsList.appendChild(workoutItem);
  });

  trackedWorkoutsContainer.appendChild(workoutsList);
}