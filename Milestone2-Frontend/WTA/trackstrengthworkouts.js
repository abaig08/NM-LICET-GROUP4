function trackStrengthWorkouts() {
  const trackDate = document.getElementById('trackDate').value;

  // Retrieve strength workouts for the specified date (you can replace this with actual data retrieval logic)
  const trackedWorkouts = getStrengthWorkoutsForDate(trackDate);

  // Display the tracked workouts
  displayTrackedWorkouts(trackedWorkouts);
}

function getStrengthWorkoutsForDate(date) {
  // This is a placeholder function; replace it with actual data retrieval logic
  // For simplicity, using a hardcoded example
  const strengthWorkouts = {
    '2023-01-01': [
      { workout: 'Bench Press', sets: 3, reps: 10 },
      { workout: 'Squats', sets: 4, reps: 8 }
    ],
    '2023-01-02': [
      { workout: 'Deadlifts', sets: 3, reps: 12 },
      { workout: 'Overhead Press', sets: 3, reps: 10 }
    ]
    // Add more entries as needed
  };

  return strengthWorkouts[date] || [];
}

function displayTrackedWorkouts(workouts) {
  const trackedWorkoutsContainer = document.getElementById('trackedWorkouts');
  trackedWorkoutsContainer.innerHTML = ''; // Clear previous content

  if (workouts.length === 0) {
    trackedWorkoutsContainer.innerHTML = '<p>No strength workouts found for the specified date.</p>';
    return;
  }

  const workoutsList = document.createElement('ul');

  workouts.forEach(workout => {
    const workoutItem = document.createElement('li');
    workoutItem.textContent = `${workout.workout} - ${workout.sets} sets x ${workout.reps} reps`;
    workoutsList.appendChild(workoutItem);
  });

  trackedWorkoutsContainer.appendChild(workoutsList);
}