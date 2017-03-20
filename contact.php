<?php 
if(isset($_POST['submit'])){
    $to = "itzli2000@msn.com";
    $from = $_POST['email'];
    $name = $_POST['first_name'];
    $subject = "Contacto desde Digimundo.";
    $subject2 = "Copia del mensaje enviado a Digimundo.";
    $message = $name . " ". " Escribió lo siguiente:" . "\n\n" . $_POST['message'];
    $message2 = "Esta es una copia de tu mensaje " . $first_name . "\n\n" . $_POST['message'];

    $headers = "De:" . $from;
    $headers2 = "De:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mensaje enviado. Gracias " . $first_name . ", nos contactaremos a la brevedad.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>