<?php
	$mailTo = "mr.junkmail89@gmail.com";
	$mailFrom = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];

	if(mail($mailTo, $subject, $message, $mailFrom)) {
		echo "Message sent successfully.";
	}
	else {
		echo "Message failed to send.";
	}
?>