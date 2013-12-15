$(document).ready(function() {
	var sender = $("#fullName").val();
	var senderEmail = $("#email").val();
	var subject = sender + ": RE: " + $("#subject").val();
	var message = $("#message").val();

	//Listen for click of send message button;
	$("#submitMessageButton").click(function() {
		var confirmSend = confirm("Send Message?");
		if(confirmSend == true) {
			$.post("javascripts/sendMessage.php",
                { subject: subject, message: message, name: sender, email: senderEmail },
                function(data){
                        alert("Your message has been sent.");
                }
        );
		}
	});
});