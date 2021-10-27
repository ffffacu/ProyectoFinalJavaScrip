const aros = JSON.parse(dataAros);
const arosUno = document.getElementById("js-arosUno");

localStorage.setItem("productos", JSON.stringify(aros));
renderHTML(aros, arosUno);
