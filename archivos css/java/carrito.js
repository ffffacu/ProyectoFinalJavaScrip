
const totalCompra = () => {
    let totalCompraFinal = localStorage.getItem('cart');
    totalCompraFinal = JSON.parse (totalCompraFinal);

    if (!totalCompraFinal){
        totalCompraFinal=[];
        $("#car").append(`<h2 class="carroVacio">Carrito vacio</h2>`)
    }else{
        for (const produc of totalCompraFinal){
            let contenedorProductos = document.createElement ("div");
            contenedorProductos.innerHTML += ` <div class="carroSiete"><p>Producto: ${produc.producto.nombre}</p></div> 
                                                <div class="carroSeis"><p> Cantidad: ${produc.cantidad}</p></div>
                                                <div class="carroSiete"><p> Precio:$${parseInt(produc.cantidad)*produc.producto.precio} + IVA</p></div>
                                                <button type="button" class="btn btn-outline-dark botonUno" id="${produc.producto.id}">X</button>
    </div>`
                                                
                                    document.getElementById("car").appendChild(contenedorProductos);
        }

        /*Total de la compra */

        let total= 0 ;
        totalCompraFinal.forEach((totalCompra)=>{
            total += parseInt(totalCompra.cantidad)*totalCompra.producto.precio;})
        
            
            
        /* Botton Finalizar Compra */

        $("#js-borraDatos").append(`<div class="borrarDatosDos">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary modalDos borrarDatosTres" data-bs-toggle="modal"
            data-bs-target="#exampleModal">
            Finalizar Compra
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content modalTres">
                    <div class="modal-header modalCinco">
                        <h5 class="modal-title" id="exampleModalLabel">FINALIZA TU COMPRA</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body carritoFinal">
                        <p></p>
                    </div>
                    <div class="modal-footer modalCinco totalCompra">
                    <button type="button" class="btn btn-secondary bg-danger modalCuatro"
                    data-bs-dismiss="modal">Atras</button>
                            <button type="button" class="btn btn-primary modalDos btonFinal"><a class="modalDos"
                            href="carrito.html">Fin de la compra</a></button>
                    </div>
                </div>
            </div>
        </div>
    </div>`);

    
    for (const produc of totalCompraFinal) {
        $(".carritoFinal").append(`<div>
        <div><p>${produc.producto.nombre} x ${produc.cantidad}</p></div>
        <div><p>$${parseInt(produc.cantidad)*produc.producto.precio}</p></div>
        </div>
        `)
    }
    let bton = document.getElementsByClassName("btonFinal");
    bton= addEventListener("click", clickFinCompra);
    function clickFinCompra (){
        localStorage.clear();
    }
    
    $(".totalCompra").append(`<p> Total con IVA $${parseInt(total*1.21)}</p>`)
    }
}   

totalCompra ();