function register() {
  var firstName = document.getElementById("firstName").value.trim();
  var lastName = document.getElementById("lastName").value.trim();
  var username = document.getElementById("username").value.trim();
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value.trim();
  var birthDate = document.getElementById("birthDate").value;

  if (!firstName || !lastName || !username || !password || !email || !birthDate) {
    setMessage("registerMessage", "Please complete all fields.", "error");
    return;
  }

  if (password.length < 6) {
    setMessage("registerMessage", "Password must be at least 6 characters.", "error");
    return;
  }

  setMessage("registerMessage", "Creating account...", "info");

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (credential) {
      return db.collection("users").doc(credential.user.uid).set({
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        birthDate: birthDate,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    })
    .then(function () {
      setMessage("registerMessage", "Registration complete. Redirecting to login...", "success");
      location.href = "login.html";
    })
    .catch(function (error) {
      var knownErrors = {
        "auth/email-already-in-use": "That email is already registered.",
        "auth/invalid-email": "The email format is invalid.",
        "auth/weak-password": "The password is too weak.",
      };
      setMessage("registerMessage", knownErrors[error.code] || "Could not complete registration.", "error");
    });
}

window.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("registerForm");

  if (!form) {
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    register();
  });
});
