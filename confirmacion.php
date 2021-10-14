<?php
$remitente = $_POST['email'];
$destinatario = 'ffffacu@hotmail.com'; // en esta línea va el mail del destinatario.
$asunto = 'Nuevo Usuario'; // acá se puede modificar el asunto del mail
if (!$_POST){
?>

<?php
}else{
	 
    $cuerpo = "Nombre: " . $_POST["nombre"] . "\r\n"; 
    $cuerpo = "Apellido: " . $_POST["apellido"] . "\r\n"; 
    $cuerpo .= "Email: " . $_POST["email"] . "\r\n";
    $cuerpo .= "Repetir Email: " . $_POST["repetirEmail"] . "\r\n";
    $cuerpo .= "Contraseña: " . $_POST["registro_pw"] . "\r\n";
    $cuerpo .= "Repetir Contraseña: " . $_POST["registro_pw2"] . "\r\n";
    $cuerpo .= "¿Pregunta de seguridad?: " . $_POST["¿Pregunta de seguridad?"] . "\r\n";
    $cuerpo .= "Respuesta: " . $_POST["respuesta"] . "\r\n";
    $cuerpo .= "Tipo de Cuenta: " . $_POST["cuenta"] . "\r\n";
	//las líneas de arriba definen el contenido del mail. Las palabras que están dentro de $_POST[""] deben coincidir con el "name" de cada campo. 
	// Si se agrega un campo al formulario, hay que agregarlo acá.

    $headers  = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/plain; charset=utf-8\n";
    $headers .= "X-Priority: 3\n";
    $headers .= "X-MSMail-Priority: Normal\n";
    $headers .= "X-Mailer: php\n";
    $headers .= "From: \"".$_POST['nombre']." ".$_POST['apellido']."\" <".$remitente.">\n";

    mail($destinatario, $asunto, $cuerpo, $headers);
    
    include 'confirmacion.html';
}
?>
