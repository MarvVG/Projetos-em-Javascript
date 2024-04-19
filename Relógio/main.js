const h = document.querySelector("#horas");
const m = document.querySelector("#minutos");
const s = document.querySelector("#segundos");
setInterval(() => {
  const date = new Date();
  h.innerHTML = `${date.getHours()} h`;
  m.innerHTML = `${date.getMinutes()} m`;
  s.innerHTML = `${date.getSeconds()} s`;
}, 1000);
