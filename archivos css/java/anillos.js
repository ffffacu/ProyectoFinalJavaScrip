const anillos = JSON.parse(dataAnillos);
const anillosDos = document.getElementById("js-anillosDos");

localStorage.setItem("productos", JSON.stringify(anillos));
renderHTML(anillos, anillosDos);
