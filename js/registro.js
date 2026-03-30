function registro() {
  var nombre = document.getElementById("nombre").value.trim();
  var apellidos = document.getElementById("apellidos").value.trim();
  var usuario = document.getElementById("usuario").value.trim();
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value.trim();
  var fecha = document.getElementById("fecha").value;

  if (!nombre || !apellidos || !usuario || !password || !email || !fecha) {
    setMessage("registroMessage", "Completa todos los campos para registrarte.", "error");
    return;
  }

  if (password.length < 6) {
    setMessage("registroMessage", "La contrasena debe tener al menos 6 caracteres.", "error");
    return;
  }

  setMessage("registroMessage", "Creando cuenta...", "info");

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (credential) {
      return db.collection("users").doc(credential.user.uid).set({
        nombre: nombre,
        apellidos: apellidos,
        usuario: usuario,
        email: email,
        fecha: fecha,
        creadoEn: firebase.firestore.FieldValue.serverTimestamp(),
      });
    })
    .then(function () {
      setMessage("registroMessage", "Registro completado. Redirigiendo a login...", "success");
      location.href = "login.html";
    })
    .catch(function (error) {
      var knownErrors = {
        "auth/email-already-in-use": "Ese email ya esta registrado.",
        "auth/invalid-email": "El email no tiene un formato valido.",
        "auth/weak-password": "La contrasena es demasiado debil.",
      };
      setMessage("registroMessage", knownErrors[error.code] || "No se pudo completar el registro.", "error");
    });
}

window.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("registroForm");

  if (!form) {
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    registro();
  });
});
