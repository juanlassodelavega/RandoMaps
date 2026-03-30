window.addEventListener("DOMContentLoaded", function () {
  firebase.auth().onAuthStateChanged(function (user) {
    if (!user) {
      location.href = "login.html";
      return;
    }

    sessionStorage.setItem("UID", user.uid);
    var userTitle = document.getElementById("userTitle");
    if (userTitle) {
      userTitle.textContent = "Welcome, " + user.email;
    }
  });
});

function logout() {
  sessionStorage.removeItem("UID");
  firebase
    .auth()
    .signOut()
    .then(function () {
      location.href = "login.html";
    })
    .catch(function () {
      setMessage("userMessage", "Could not sign out. Please try again.", "error");
    });
}

function generateRandomTrip() {
  var distance = document.getElementById("distance");
  var travelers = document.getElementById("travelers");
  var population = document.getElementById("population");
  var nights = document.getElementById("nights");

  if (!distance || !travelers || !population || !nights) {
    return;
  }

  var missingFilters =
    distance.selectedIndex === 0 ||
    travelers.selectedIndex === 0 ||
    population.selectedIndex === 0 ||
    nights.selectedIndex === 0;

  if (missingFilters) {
    setMessage("userMessage", "Please select all filters to tailor your trip.", "error");
    return;
  }

  renderRandomDestination("random", "randomTitle");
  setMessage("userMessage", "Trip generated based on your preferences. Have a great journey.", "success");
}
