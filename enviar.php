<?php
if ($_POST['stopspam'] != ""){

  exit();
}else{

$name = $_POST['name'];
$mail = $_POST['mail'];

$message = $_POST['message'];
$header = 'From: ' . $name . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message .= "Nombres: " . $_POST['name'] . " \r\n";
$message .= "Telefono: " . $_POST['telefono'] . " \r\n";
$message .= "E-mail: " . $_POST['mail'] . " \r\n";
$message .= "Mensaje: " . $_POST['mensaje'] . " \r\n";

$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'xfpad93@gmail.com';
$asunto = 'Desde la pagina web';


mail($para, $asunto, utf8_decode($message), $header);

header("Location:contacto2.html");
}
?>