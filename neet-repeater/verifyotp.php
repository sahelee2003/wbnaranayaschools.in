<?php

session_start();
header("Content-Type: application/json");

$input=json_decode(file_get_contents("php://input"),true);

$phone=$input['phone'] ?? '';
$otp=$input['otp'] ?? '';
$id=$input['DBid'] ?? '';

if(!isset($_SESSION['otp'][$phone])){

echo json_encode([
"status"=>false,
"message"=>"OTP expired"
]);

exit;
}

if($_SESSION['otp'][$phone]!=$otp){

echo json_encode([
"status"=>false,
"message"=>"Invalid OTP"
]);

exit;
}

$servername="localhost";
$username="narayana_app";
$password="d16R2ScDwot0Y4Z2Of4XSIe4";
$dbname="codesol1_narayanaschools";

$conn=new mysqli($servername,$username,$password,$dbname);

$sql="UPDATE leads
SET otp_validation='VALID'
WHERE id=? AND phone=?";

$stmt=$conn->prepare($sql);

$stmt->bind_param("is",$id,$phone);

$stmt->execute();

unset($_SESSION['otp'][$phone]);

echo json_encode([
"status"=>true
]);

?>