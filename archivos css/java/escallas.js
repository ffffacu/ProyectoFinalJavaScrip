const escallas = JSON.parse(dataEscallas);
const escallasDos = document.getElementById("js-escallasDos");

localStorage.setItem("productos", JSON.stringify(escallas));
renderHTML(escallas, escallasDos);
