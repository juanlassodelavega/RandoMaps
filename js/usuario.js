window.addEventListener("DOMContentLoaded", function () {
  firebase.auth().onAuthStateChanged(function (user) {
    if (!user) {
      location.href = "login.html";
      return;
    }

    sessionStorage.setItem("UID", user.uid);
    var usuarioTitle = document.getElementById("usuario");
    if (usuarioTitle) {
      usuarioTitle.textContent = "Bienvenid@, " + user.email;
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
      setMessage("userMessage", "No se pudo cerrar sesion. Intentalo de nuevo.", "error");
    });
}

function RandoMaps() {
  var distancia = document.getElementById("distancia");
  var huesped = document.getElementById("huesped");
  var habitantes = document.getElementById("habitantes");
  var noches = document.getElementById("noches");

  if (!distancia || !huesped || !habitantes || !noches) {
    return;
  }

  var filtrosIncompletos =
    distancia.selectedIndex === 0 ||
    huesped.selectedIndex === 0 ||
    habitantes.selectedIndex === 0 ||
    noches.selectedIndex === 0;

  if (filtrosIncompletos) {
    setMessage("userMessage", "Selecciona todos los filtros para afinar tu viaje.", "error");
    return;
  }

  renderRandomDestino("random", "randomTitle");
  setMessage("userMessage", "Ruta generada segun tus preferencias. Buen viaje.", "success");
}
