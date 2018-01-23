<?php
  $destino = array('charlixd.cm@gmail.com',
  'ceo@digimundo.com.mx');

  $contacto = $_POST["nombre"];
  $puesto = $_POST['Puesto'];
  $empresa = $_POST['Empresa'];
  $telefono = $_POST['Telefono'];
  $Email = $_POST['Email']
  $hora = $_POST['hora'];
  $hora2 = $_POST['hora2'];
  $dias = $_POST['dias'];
  $servicios = $_POST['servicios'];
  $mensaje = $_POST['Mensaje'];

  $contenido= "Mensaje desde Digimundo"."\nDatos de contacto".
  "\n Nombre del Contacto".$contacto.
  "\n Puesto".$puesto.
  "\n Nombre de la empresa" . $empresa .
  "\n Telefono".$telefono.
  "\n Horario de atencion de".$hora."a".$hora2. "los dias".$dias.
  "\n Se requieren los siguientes servicios".$servicios.
  "\n Descripcion del problema".$mensaje;

  mail($destino,"Cliente", $contenido);
  header("Location:index.html");
 ?>
