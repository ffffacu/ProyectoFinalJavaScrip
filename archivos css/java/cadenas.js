const cadenas = JSON.parse(dataCadenas);
const cadenaDos = document.getElementById("js-cadenasDos");

localStorage.setItem("productos", JSON.stringify(cadenas));
renderHTML(cadenas, cadenaDos);
