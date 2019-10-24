<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);


include_once '../includes/furworld_datanetwork.php';

if(isset($_GET['email']) && !empty($_GET['email']) AND isset($_GET['hash']) && !empty($_GET['hash'])){
	if (isset($_POST['attemptverification'])){
		$email = mysqli_real_escape_string($con, $_GET['email']); 
		$hash = mysqli_real_escape_string($con, $_GET['hash']); 

		$sql = "SELECT * FROM `userbase` WHERE `email`='$email' AND `tempToken`='$hash'";
		$q = mysqli_query($con, $sql);
		
		$res = mysqli_fetch_assoc($q);
		
		if ($res['Activated'] == 1){
			echo "account already activated";
			exit();
			
		} else{
			$sql = "UPDATE userbase SET Activated='1' WHERE tempToken='$hash'";
			$q = mysqli_query($con, $sql);

			$sql = "UPDATE userbase SET tempToken='' WHERE tempToken = '$hash'";
			$q = mysqli_query($con, $sql);
			
			header("Location: /login.php?e=activationworked");
			exit();
		}
} else{
    echo "invalid parameters";
    exit();
}

$errormsg = $_GET['e'];
$msgtodisplay = "&nbsp;";


if($errormsg == "captchafail"){
	$msgtodisplay = "You have failed the reCAPTCHA Test. Please try again";
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
<form action="verify.php" method="post">
	<div class="loginform" style="height: 400px;">
		<img class="fw_logo" alt="Furworld Logo" src="https://cdn.pixelsworld.uk/img_src/bannericn.png">
		<p style="color: black; text-align: center; font-family: Questrial; font-size: 25px;">01010010 01101111 01100010<br> 01101111 01110100?</p>
		<div class="g-recaptcha fw_capt" data-sitekey="6Leb0rsUAAAAAEhnecd5I4Rk0LxI3SFFu3jPdfeB"></div>
		<p style="color: red; text-align: center; font-family: Questrial"><?php echo $msgtodisplay;?></p> 
		<button class="button" name="attemptverification">Submit</button>
	</div>
</form>
	

</body>
</html>