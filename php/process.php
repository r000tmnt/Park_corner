<?php
header("Content-Type:text/html; charset=utf-8");
error_reporting(E_ALL);

//connect to database
require_once("connect.php");

$name = "";
$phone = "";
$email = "";
$checkBoxes = "";
$detail = ""; 
$responce = "";
$files = "";
$totalFile = "";

if (isset($_POST["name"], $_POST["phone"], $_POST["email"], $_POST["checkbox"], $_POST["detail"], $_FILES['files'])){
    $name =  $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $checkBoxes = $_POST["checkbox"];
    $detail = $_POST["detail"];
    $files = $_FILES['files']['name'];
}

$detail = mb_convert_encoding($detail, "utf-8");

// Count # of uploaded files in array
if(is_countable($totalFile)){
    $totalFile = count($_FILES['files']['name']);
}

foreach($_FILES['files']["tmp_name"]as $key=>$value){
  $targetPath="uploads/".basename($_FILES['files']['name'][$key]);move_uploaded_file($value,$targetPath);
}

$showFile = json_encode($files);
$showType = json_encode($checkBoxes);


//email after submit
use PHPMailer\PHPMailer\PHPMailer;
require_once "Exception.php";
require_once "PHPMailer.php";
require_once "SMTP.php";

$mail = new PHPMailer(true);
try{
  $mail->isSMTP();
  $mail->SMTPOptions = array(
    'ssl' => array(
    'verify_peer' => false,
    'verify_peer_name' => false,
    'allow_self_signed' => true
    )
    );
  $mail->SMTPDEbug = 2;
  $mail->Host = 'smtp.gmail.com';
  $mail->SMTPAuth = true;
  $mail->Username = 'rick.t.ryahoocomtw653@gmail.com';
  $mail->Password = 'ndowdvhtpormfptd';
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  $mail->Port = 587;

  $mail->setFrom('rick.t.ryahoocomtw653@gmail.com', 'Vistor');//The email address used as SMTP server
  $mail->addAddress('rick.t.ryahoocomtw653@gmail.com');//The address to recive email(use any email you have include the one for server)

  $mail->isHTML(true);
  $mail->Subject = 'Q&A or Commission';
  $mail->Body = "<h3>Name: $name <br> Phone: $phone <br> Email: $email <br> Type: $showType <br> Files: $showFile <br> Message: $detail</h3>";
  $mail->send();
  // echo "Message sent!";

  $result = "\r\n姓名: $name\r\n 信箱: $email\r\n 電話: $phone\r\n 類別: $showType\r\n 檔案: $showFile\r\n 描述: $detail";

  //insert to  database
  $sql = "INSERT INTO submit_data (name, phone, email, checkBoxes, fileNames, detail) VALUES ('$name', '$phone', '$email', '$showType', '$showFile', '$detail')";
  
  if(mysqli_query($db, $sql)){
    echo $responce. $result;
  }else{
    echo "出錯: ".$sql."<br>".mysqli_error($db);
  }


}catch (Exception $e){
  echo "Mailer error: {$mail->ErrorInfo}";
}

mysqli_close($db);
?>