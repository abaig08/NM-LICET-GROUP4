function setStrengthWorkout() {
  const date = document.getElementById('date').value;
  const workout = document.getElementById('workout').value;
  const sets = document.getElementById('sets').value;
  const reps = document.getElementById('reps').value;

  // You can add functionality to store this information, for example, send it to a server or save it locally
  console.log(`Strength Workout set for ${date}: ${workout} - ${sets} sets x ${reps} reps`);
  alert('Strength Workout set successfully!');
}
