function login() {
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value;

  if (!email || !password) {
    setMessage("loginMessage", "Completa email y contrasena para continuar.", "error");
    return;
  }

  setMessage("loginMessage", "Verificando credenciales...", "info");

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function (credential) {
      sessionStorage.setItem("UID", credential.user.uid);
      setMessage("loginMessage", "Acceso correcto. Redirigiendo...", "success");
      location.href = "usuario.html";
    })
    .catch(function (error) {
      var knownErrors = {
        "auth/invalid-email": "El formato del email no es valido.",
        "auth/user-disabled": "Esta cuenta esta desactivada.",
        "auth/user-not-found": "No existe una cuenta con ese email.",
        "auth/wrong-password": "La contrasena introducida no es correcta.",
      };
      setMessage("loginMessage", knownErrors[error.code] || "No se pudo iniciar sesion.", "error");
    });
}

window.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("loginForm");

  if (firebase.auth().currentUser) {
    location.href = "usuario.html";
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
