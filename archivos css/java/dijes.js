const dijes = JSON.parse(dataDijes);
const dijesDos = document.getElementById("js-dijesDos");

localStorage.setItem("productos", JSON.stringify(dijes));
renderHTML(dijes, dijesDos);
