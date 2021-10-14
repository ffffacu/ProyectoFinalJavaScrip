
$("#loginUser").submit(function (e) {
    e.preventDefault();
    let user = $("#loginUsuario").val();
    let pasword = $("#loginPasword").val();
    let bAcceso = false;
    bAcceso= login(user, pasword);
    
    if (bAcceso == false) {
        Swal.fire({
            icon:`error`,
            title:`Contraseña o Usuario Incorrecto`,
        })
    }
    else if  (bAcceso == true) {
        Swal.fire({
            icon:`success`,
            title:`Hola ${user}
                Iniciaste Sesion Correctamente`,
        })
        ingresar(user)
    }
});

function ingresar (user){
        $("#client").prepend(`Bienvenido ${user}`);

}