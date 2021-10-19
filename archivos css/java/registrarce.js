class Usuario {
    constructor(nomb, usr, emails, pasword) {
        this.nomb = nomb;
        this.usr = usr;
        this.emails = emails;
        this.pasword = pasword;
    }
}


usuario=[];



$("#formul").submit(function (e) {
    e.preventDefault();
    usuario= localStorage.getItem('usuarios');
    let nomb = $("#nombr").val();
    let usr = $("#usr").val();
    let emails = $("#email").val();
    let repEmails = $("#repetirEmail").val();
    let pasword = $("#contra").val();
    let repPasword = $("#repetirContra").val();
    if (!usuario){
        usuario= [];
    }else{
        if(emails == repEmails && pasword == repPasword){
        usuario= JSON.parse(usuario);
        $(`.regisDos`).fadeOut("slow")
        
        $(".confirmacionOcho").fadeIn("slow", function(){
            $(`.confirmacionOcho`).prepend(`<main class="confirmacionUno">
            <div class="confirmacionDos">
                <img class="confirmacionTres" src="fotos/logos/logo 5.png" alt="Registro correcto">
                <p class="confirmacionCuatro">Se ha registrado exitosamente</p>
                <p class="confirmacionCinco">Gracias por formar parte de nosotros</p>
                <p class="confirmacionSeis">¿Ya tienes una cuenta? <a class="confirmacionSiete" href="login.html">Ingresa
                        aqui</a> </p>
            </div>
        </main>`);
        });       
        }else{
            
            Swal.fire({
                icon:`error`,
                title:`Datos Incorrectos`,
            })
        }
    }
    let clientes = new Usuario (nomb, usr ,  emails, pasword);
    usuario.push(clientes);
    usuario=JSON.stringify(usuario);
    localStorage.setItem('usuarios', usuario);

    
});



