const sueltas = JSON.parse(datapiedrassueltas);
const sueltaDos = document.getElementById("js-sueltaDos");

localStorage.setItem("productos", JSON.stringify(sueltas));
renderHTML(sueltas, sueltaDos);
