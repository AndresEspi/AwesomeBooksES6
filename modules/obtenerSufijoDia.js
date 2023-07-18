/* eslint-disable */
const obtenerSufijoDia = (dia) => {
  if (dia === 1 || dia === 21 || dia === 31) {
    return "st";
  } else if (dia === 2 || dia === 22) {
    return "nd";
  } else if (dia === 3 || dia === 23) {
    return "rd";
  } else {
    return "th";
  }
};
