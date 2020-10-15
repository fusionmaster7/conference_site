<?php  
if(isset($_POST['submit'])){
    if(isset( $_POST['name']))
$name = $_POST['name'];
if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['message']))
$message = $_POST['message'];
if(isset( $_POST['subject']))
$subject = $_POST['subject'];
if ($name === ''){
    echo '<script>alert("This field can not be empty")</script>'; 
die();
}
if ($email === ''){
    echo '<script>alert("This field can not be empty")</script>'; 
die();
} else {
if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
    echo '<script>alert("Invalid Email format")</script>'; 
die();
}
}
if ($subject === ''){
    echo '<script>alert("This field can not be empty")</script>'; 
die();
}
if ($message === ''){
    echo '<script>alert("This field can not be empty")</script>'; 
die();
}

$content="From: $name \nEmail: $email \nMessage: $message";
$recipient = 'yogitasangwannit21@gmail.com';
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
echo '<script>alert("Email sent")</script>'; 

}

?>