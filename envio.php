<?php
  $Contacto = $_POST['Contacto'];
  $Puesto = $_POST['Puesto'];
  $Empresa = $_POST['Empresa'];
  $Telefono = $_POST['Telefono'];
  $hora = $_POST['hora'];
  $hora2 = $_POST['hora2'];
  $dias = $_POST['dias'];
  $servicios = $_POST['serviocios'];
  $Mensaje = $_POST['Mensaje'];

$contenido = '
  <html>
  <head>
      <title></title>
  </head>
  <body>
        <h2> Se ha recibido un mensaje de Digimundo</h2>
        <p>Datos del Cliente</p>
        <p> Nombre de Cliente: '.$Contacto'
            Puesto: '.$Puesto'  <br>
      Nombre de la Empresa: '.$Empresa' <br>
      Teléfonos: '.$Telefono' <br>
      Horario de : '.$hora' a : '.$hora2' <br>
      Comunicarse en los días: '.$dias' <br>
      Se requieren los servicio de: '.$servicios' <br>
      Descripcion del problema: '.$Mensaje' </p>
  </body>
  </html>';

  $header = "From: Pet Guru\r\nReply-To: softwaremanager@digimundo.com".
          'X-Mailer:PHP/'.phpversion();
  $headers .= "Content-type: text/html; charset=UTF-8 \r\n";

  $envio = mail('charlixd.cm@gmail.com', $contenido, $headers);

  if($envio){
    $miresultado = '<h4>Los datos se enviarion correctamente, gracias.Nos pondremos en contacto lo antes posible.</h4>'
  }
  else{
    $miresultado = '<h4>No se enviarion los datos, revise que haya llenado todos los ccampos solicitados</h4>'
  }
  echo $miresultado
 ?>
