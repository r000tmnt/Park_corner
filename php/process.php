<?php
header("Content-Type:text/html; charset=utf-8");
error_reporting(E_ALL);

//connect to database
require_once("connect.php");

$customer_id = "";
$name = '';
$phone = "";
$email = "";
$checkBoxes = "";
$types = "";
$desc = ""; 
$response = "";
$files = "";
$date = date("Y-m-d");
$time = date("h:i:sa");
$today = $date.$time
// $totalFile = "";

$fileArray = array();

if (isset($_POST["customer_id"], $_POST["phone"], $_POST["email"], $_POST["checkbox"], $_POST["types"], $_POST["desc"], $_FILES['files'])){
    $name =  $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $checkBoxes = $_POST["checkbox"];
    $types = $_POST["types"];
    $desc = $_POST["desc"];
    $files = $_FILES['files']['name'];
}

$detail = mb_convert_encoding($detail, "utf-8");

// Count # of uploaded files in array
// if(is_countable($totalFile)){
//     $totalFile = count($_FILES['files']['name']);
// }
$showFile = json_encode($files);
$showType = json_encode($checkBoxes);

// Check if user exist
$sql = "SELECT id FROM customer WHERE email = '.$email.'"

if(mysqli_query($db, $sql)){
  echo '找到客戶: >>> '.$response.$result;
}else{
  echo "查無客戶，開始新增客戶";

  $sql = "INSERT INTO customer (name, phone, email, checkBoxes, fileNames, desc) VALUES ('$name', '$phone', '$email', '$showType', '$showFile', '$detail')";

  if(mysqli_query($db, $sql)){
    echo '新增成功: >>> ' $response. $result;
    
    //email after submit
    // use PHPMailer\PHPMailer\PHPMailer;
    // require_once "Exception.php";
    // require_once "PHPMailer.php";
    // require_once "SMTP.php";

    // $mail = new PHPMailer(true);
    // try{
    //   $mail->isSMTP();
    //   $mail->SMTPOptions = array(
    //     'ssl' => array(
    //     'verify_peer' => false,
    //     'verify_peer_name' => false,
    //     'allow_self_signed' => true
    //     )
    //     );
    //   $mail->SMTPDEbug = 2;
    //   $mail->Host = 'smtp.gmail.com';
    //   $mail->SMTPAuth = true;
    //   $mail->Username = 'rick.t.ryahoocomtw653@gmail.com';
    //   $mail->Password = ''; // 不要公開任何密碼
    //   $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    //   $mail->Port = 587;

    //   $mail->setFrom('rick.t.ryahoocomtw653@gmail.com', 'Visitor');//The email address used as SMTP server
    //   $mail->addAddress('rick.t.ryahoocomtw653@gmail.com');//The address to recive email(use any email you have include the one for server)

    //   $mail->isHTML(true);
    //   $mail->Subject = 'Q&A or Commission';
    // foreach($_FILES['files']["tmp_name"]as $key=>$value){
    //   $targetPath="uploads/".basename($_FILES['files']['name'][$key]);
    //   move_uploaded_file($value,$targetPath);
    //   $imageData = file_get_contents($_FILES['files']['name'][$key]);
    //   $base64 = base64_encode($imageData);
    //   array_push($fileArray, $base64);
      //   $mail->AddEmbeddedImage($_FILES['files']['name'][$key], $key)
    //     $mail->addAttachment($_FILES['files']["tmp_name"][$key], $_FILES['files']['name'][$key])
    // }
    //   $mail->Body = "<h3>Name: $name <br> Phone: $phone <br> Email: $email <br> Type: $showType <br> Files: $showFile <br> Message: $detail</h3>";
    //   $mail->send();
    //   // echo "Message sent!";

    //   $result = "\r\n姓名: $name\r\n 信箱: $email\r\n 電話: $phone\r\n 類別: $showType\r\n 檔案: $showFile\r\n 描述: $detail";

    //   //insert to  database
    //   $sql = "INSERT INTO commissions (name, phone, email, checkBoxes, fileNames, detail) VALUES ('$name', '$phone', '$email', '$showType', '$showFile', '$detail')";
      
    //   if(mysqli_query($db, $sql)){
    //     echo $response. $result;
    //   }else{
    //     echo "出錯: ".$sql."<br>".mysqli_error($db);
    //   }


    // }catch (Exception $e){
    //   echo "Mailer error: {$mail->ErrorInfo}";
    // }


  }else{
    echo "新增客戶出錯: ".$sql."<br>".mysqli_error($db);
  }

  mysqli_close($db);
}
?>