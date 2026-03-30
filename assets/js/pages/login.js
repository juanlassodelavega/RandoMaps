function login() {
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value;

  if (!email || !password) {
    setMessage("loginMessage", "Please complete both email and password.", "error");
    return;
  }

  setMessage("loginMessage", "Checking credentials...", "info");

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function (credential) {
      sessionStorage.setItem("UID", credential.user.uid);
      setMessage("loginMessage", "Login successful. Redirecting...", "success");
      location.href = "user.html";
    })
    .catch(function (error) {
      var knownErrors = {
        "auth/invalid-email": "The email format is invalid.",
        "auth/user-disabled": "This account is disabled.",
        "auth/user-not-found": "No account was found with that email.",
        "auth/wrong-password": "The password is incorrect.",
      };
      setMessage("loginMessage", knownErrors[error.code] || "Could not sign in.", "error");
    });
}

window.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("loginForm");

  if (firebase.auth().currentUser) {
    location.href = "user.html";
    return;
  }

  if (!form) {
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    login();
  });
});
