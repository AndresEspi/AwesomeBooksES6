/* eslint-disable */
const mostrarFechaHora = () => {
  const fechaHora = luxon.DateTime.local();
  const dia = fechaHora.day;
  const sufijoDia = obtenerSufijoDia(dia);
  const mes = fechaHora.monthLong;
  const anio = fechaHora.year;
  let hora = fechaHora.hour;
  const minutos = fechaHora.minute;
  const segundos = fechaHora.second;
  const sufijoHora = hora < 12 ? "am" : "pm";
  hora = hora % 12 === 0 ? 12 : hora % 12;
  const minutosCadena = minutos.toString().padStart(2, "0");
  const mensaje = `${mes} ${dia}${sufijoDia} ${anio}, ${hora}:${minutosCadena}:${segundos} ${sufijoHora}`;
  document.getElementById("fecha-hora").textContent = mensaje;
};
setInterval(mostrarFechaHora, 1000);