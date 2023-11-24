function setEnduranceWorkout() {
  const date = document.getElementById('date').value;
  const workout = document.getElementById('workout').value;
  const duration = document.getElementById('duration').value;

  // You can add functionality to store this information, for example, send it to a server or save it locally
  console.log(`Endurance Workout set for ${date}: ${workout} - ${duration} minutes`);
  alert('Endurance Workout set successfully!');
}
