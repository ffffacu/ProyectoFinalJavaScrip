userOnline = [];

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
        $(`.loginCuatro`).fadeOut("slow")
        
        $(".confirmacionOcho").fadeIn("slow", function(){
            $(`.confirmacionOcho`).prepend(`<main class="confirmacionUno">
            <div class="confirmacionDos">
                <img class="confirmacionTres" src="fotos/logos/logo 5.png" alt="Registro correcto">
                <p class="confirmacionCuatro">Has iniciado sesion correctamente</p>
            </div>
        </main>`);
        });
        ingresar(user)
    }
});

function ingresar (user){
        userOnline= sessionStorage.getItem ("userOnline");
        if(!userOnline){
            userOnline = [];
        }else{
            userOnline=JSON.parse(userOnline);
        }
        let clientOnline = {nombre: user}
        userOnline.push(clientOnline);
        userOnline=JSON.stringify(userOnline);
        sessionStorage.setItem('userOnline', userOnline);
        $("#client").prepend(`Bienvenido ${user}`);
        sessionStorage.clear();
}