<?php


require "PHPMailer-master/PHPMailerAutoload.php";

$name = $_POST['name'];
$phone = $_POST['phone'];
$street = $_POST['street'];
$home = $_POST['home'];
$part = $_POST['part'];
$appt = $_POST['dapptata'];
$floor = $_POST['floor'];


$mail = new PHPMailer;

	//$mail->SMTPDebug = 3;                                   // Enable verbose debug output

	$mail->isSMTP();                                      // метод отправки как SMTP
	$mail->Host = 'smtp.gmail.com';                         // Specify main and backup SMTP servers
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'stylenova@gmail.com';                 // SMTP username
	$mail->Password = '*g0*F#pudvgC99&5';                           // SMTP password
	$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
	$mail->Port = 465;                                    // TCP port to connect to

	$mail->setFrom('stylenova@gmail.com', 'Web-stгdio stylenova');
	$mail->addAddress('stylenova@gmail.com', 'stylenova');     // Получатель
	$mail->isHTML(true);                                  // Set email format to HTML

	$mail->Subject = 'Тестовое письмо';
	$mail->Body    = 'Привет, это тестовое письмо, как связь, как сам. Где счет, ауууууу'.$data;
	$mail->AltBody = 'Привет, это тестовое письмо, как связь, как сам';

	if(!$mail->send()) {
		$mydata['mes'] = 'Message could not be sent.';
		$mydata['mes'] .= 'Mailer Error: ' . $mail->ErrorInfo;
		$mydata['status'] = 'error';
	} else {
		$mydata['mes'] = 'Message has been sent';
		$mydata['status'] = 'OK';
	}

echo json_encode($mydata);

