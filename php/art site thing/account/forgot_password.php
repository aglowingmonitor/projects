<?php
session_start();

$errormsg = $_GET['e'];
$msgtodisplay = "&nbsp;";


if($errormsg == "captchafail"){
	$msgtodisplay = "You have failed the reCAPTCHA Test. Please try again";
}

if ($errormsg == "owo"){
	echo "owo";
}



?>


<html>	
<link rel="stylesheet" href="../src/css/login.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
	
<head>
	<title>Login - Furworld</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<script src='https://www.google.com/recaptcha/api.js'></script>

</head>
	
<body>
<form action="../includes/processresetrequest.php" method="post">
	<div class="loginform">
		<img class="fw_logo" alt="Furworld Logo" src="https://cdn.pixelsworld.uk/img_src/bannericn.png">
		<p style="color: black; text-align: center; font-family: Questrial; font-size: 30px;">Enter your email address</p>
		<input class="emailinput" type="email" required autocomplete="off" name="email" placeholder="Email Address">
		<div class="g-recaptcha fw_capt" data-sitekey="6Leb0rsUAAAAAEhnecd5I4Rk0LxI3SFFu3jPdfeB"></div>
		<p style="color: red; text-align: center; font-family: Questrial"><?php echo $msgtodisplay;?></p> 
		<button class="button" name="submitreset">Submit</button>
		<a href="#"><h3 class="forgottenpass">Sign in instead</h3></a>
	</div>
</form>
	

</body>
</html>
