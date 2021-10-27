const llavero = JSON.parse(dataLlaveros);
const llaveroDos = document.getElementById("js-llaveroDos");

localStorage.setItem("productos", JSON.stringify(llavero));
renderHTML(llavero, llaveroDos);
