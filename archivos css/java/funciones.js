const buscador = document.getElementById('filtroBusqueda');
const btnBuscador = document.getElementById('btnBuscadorUno');

let cart = [];

const renderHTML = (productos, contenedor) => {
        contenedor.innerHTML ='';
        if(productos.length > 0){
            for (let producto of productos) {
                const productoInHTML = `<div class=${producto.clas}>
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
                contenedor.innerHTML += productoInHTML;
            }
        }else{
            contenedor.innerHTML ='<p>No se encontro producto</p>'
        }


    /*Cantidad seleccionada*/

$(".cant").change(function (e) { 
    return quantity = e.target.value
});


    /*Funcion de boton Agregado al carrito*/


let but = document.querySelectorAll(".botonUno");
but.forEach((element) => {
    element.addEventListener("click", respuestaClick);
});
    function respuestaClick(e) {
    const producto = productos.find((element) => element.id == e.target.id)
            cart= localStorage.getItem('cart');
            if (!cart){
                cart= [];
            }else{
                cart= JSON.parse(cart);
            }
            let carro = { cantidad:quantity , producto };
            console.log(carro)

            cart.push(carro);

            cart=JSON.stringify(cart);
            
            localStorage.setItem('cart' , cart );
    }

    /*funcion de buscador de productos */

    const filtrarBusqueda =()=>{
        const texto = buscador.value;
        const filterProduc = productos.filter((product) =>{
            const productName= product.nombre.toLowerCase();
            return productName.includes(texto.toLowerCase())
        })       
        renderHTML (filterProduc, contenedor);
    }
    

btnBuscador.addEventListener('click' , filtrarBusqueda);
buscador.addEventListener('keyup', filtrarBusqueda);

    /*Filtro por precios*/

    function filtrePrecio (){
    $('#btnRadio').on( 'click', function () {
        let filtroPrec = document.filterPrecio.precio;
        for (let i=0; i< filtroPrec.length; i++){
            if(filterPrecio.precio[i].checked)
            {
                const option= filterPrecio.precio[i].value
                switch (option){}
                if(option == 1){
                    const filterPrecio = productos.filter((product=> product.precio < 200));
                    renderHTML (filterPrecio, contenedor);
                }
                if (option == 2){
                    const filterPrecio = productos.filter((product=> product.precio <= 500));
                    renderHTML (filterPrecio, contenedor);
                }
                if (option == 3){
                    const filterPrecio = productos.filter((product=> product.precio > 0));
                    renderHTML (filterPrecio, contenedor);
                }
            }
        }
    })
}
filtrePrecio ()
}

function login (user, pasword ){

    iniciarSesion= localStorage.getItem('usuarios');
    iniciarSesion= JSON.parse(iniciarSesion);
    bIniciarSesion = false;
    for(let i=0; i<iniciarSesion.length ; i++){
        if(user == iniciarSesion[i].usr && pasword == iniciarSesion[i].pasword)
        bIniciarSesion= true;
        sessionStorage.setItem("usuarioLogin", iniciarSesion[i].usr + " " + iniciarSesion[i].pasword);
    }
    return bIniciarSesion;
}




