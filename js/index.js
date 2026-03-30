function check() {
  if (firebase.auth().currentUser) {
    location.href = "usuario.html";
    return;
  }

  location.href = "login.html";
}

function RandoMaps() {
  renderRandomDestino("random", "randomTitle");
}
