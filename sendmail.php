<?php  

// Send Email

$to = 'stephengormley@hotmail.com';

$subject = 'Website Contact - ' . strip_tags($_POST['subject']);

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=UTF8' . "\r\n";

$headers .= 'To: Gormley Construction < ' . $to . '>' . "\r\n";
$headers .= 'From: ' . strip_tags($_POST['name']) . ' < ' . strip_tags($_POST['email']) . ' >' . "\r\n";

$message = strip_tags($_POST['message']);

mail($to, $subject, $message, $headers);

header('Location: /?sent=1#5');


?>