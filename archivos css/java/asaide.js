const buscador = document.getElementById('filtroBusqueda');
const btnBuscador = document.getElementById('btnBuscadorUno');

const filtrarBusqueda =(productos, conten)=>{
    conten.innerHTML ;
    const texto = buscador.value.toLowerCase();
    for (producto of productos) {
        let nombre = producto.nombre.toLowerCase();
        if(nombre.indexOf(texto) !== -1){
            conten.innerHTML  = `<div class=${producto.clas}>
            <img class="src" src="${producto.imgSrc}">
            <p>${producto.nombre}</p>
            <p>$${producto.precio} + IVA</p>
            <label for="Cantidad">Cantidad</label>
                            <select name="Cantidad" class="cant" required>
                                <option value="1" class="cantidad">1</option>
                                <option value="2" class="cantidad">2</option>
                                <option value="3" class="cantidad">3</option>
                                <option value="4" class="cantidad">4</option>
                            </select>
            <button type="button" class="btn btn-outline-dark botonUno" id="${producto.id}">Añadir al carrito</button>
        </div>
        `;
        }
        if (conten.innerHTML == ''){
            conten.innerHTML =`<p>Producto no encontrado</p>`
        }
    }
}

buscador.addEventListener('keyup', filtrarBusqueda);




