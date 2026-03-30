function goToAccount() {
  if (firebase.auth().currentUser) {
    location.href = "pages/user.html";
    return;
  }

  location.href = "pages/login.html";
}

function generateRandomTrip() {
  renderRandomDestination("random", "randomTitle");
}
