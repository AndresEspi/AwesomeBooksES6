/* eslint-disable */
const mostrarSeccion = (seccionId) => {
  const secciones = document.getElementsByClassName("section");
  for (let i = 0; i < secciones.length; i++) {
    secciones[i].classList.add("hidden");
  }
  document.getElementById(seccionId).classList.remove("hidden");
};
