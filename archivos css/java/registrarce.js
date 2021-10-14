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
        Swal.fire({
            icon:`success`,
            title:`Gracias por registrarte`,
        })
        }else{
            Swal.fire({
                icon:`error`,
                title:`Datos Incorrectos`,
            })
        }
    }
    let clientes = { nombre: nomb, user:usr , email: emails, contrasena: pasword};
    usuario.push(clientes);
    usuario=JSON.stringify(usuario);
    localStorage.setItem('usuarios', usuario);
    
});


