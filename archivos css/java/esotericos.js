const esotericos = JSON.parse(dataEsotericos);
const esotericosDos = document.getElementById("js-esotericosDos");

localStorage.setItem("productos", JSON.stringify(esotericos));
renderHTML(esotericos, esotericosDos);
