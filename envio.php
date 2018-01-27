<?php
    $encoding = "utf-8";
// Preferences for Subject field
    $subject_preferences = array(
        "input-charset" => $encoding,
        "output-charset" => $encoding,
        "line-length" => 76,
        "line-break-chars" => "\r\n"
        );

// Multiple recipients
    $to = array('charlixd.cm@gmail.com.mx',
    'ceo@digimundo.com.mx');
    $from_contacto = $_POST["nombre"];
    $from_puesto = $_POST['Puesto'];
    $from_company = $_POST['Empresa'];
    $from_phone = $_POST['phone'];
    $from_mail = $_POST['mail'];
    $from_hour = $_POST['hora'];
    $from_hour2 = $_POST['hora2'];
    $from_days = $_POST['dias'];
    $from_services = $_POST['servicios'];
    $from_description = $_POST['Mensaje'];

// Subject
    $subject = 'Nuevo mensaje de Digimundo';
// Message
    $message = '
    <html>
    <head>
      <title>Cliente Digimundo</title>
  </head>
  <body>
      <h2>Mensaje de:.</h2>
      <h4> <br>Correo: '.$from_mail.' <br>Datos del cliente:</h4>
      <p> Nombre: '. $from_contacto .'</p>
      <p> Puesto: '.$from_puesto.'</p>
      <p> Nombre de la Empresa: '.$from_company.'</p>
      <p> Telefonos: '.$from_phone.'</p>
      <p> Horario de contacto es de: '.$from_hour.' a '.$from_hour2.' los días: '.$from_days.' </p>
      <p> Requiere los siguientes servicios: <br> '.$from_services.'</p>
      <p> Descripción del problema: <br> '.$from_description.'</p>
  </body>
  </html>
  ';

// To send HTML mail, the Content-type header must be set
// Mail header
  $header = "Content-type: text/html; charset=".$encoding." \r\n";
  $header .= "De: ".$from_contacto." <".$from_mail."> \r\n";
  $header .= "MIME-Version: 1.0 \r\n";
  $header .= "Content-Transfer-Encoding: 8bit \r\n";
  $header .= "Fecha: ".date("r (T)")." \r\n";
  $header .= iconv_mime_encode("Asunto", $mail_subject, $subject_preferences);

// Mail it
  mail($to, $subject, $message, $header);

// Redirect
  header('Location: index.html');

?>
