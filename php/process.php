<?php
header("Content-Type:text/html; charset=utf-8");
error_reporting(E_ALL);

//connect to database
require_once("connect.php");

$customer_id = "";
$name = '';
$phone = "";
$email = "";
$types = "";
$desc = ""; 
$response = "";
$files = "";
$date = date("Y-m-d");
$time = date("h:i:sa");
$today = $date.$time;
// $totalFile = "";

$fileArray = array();

function createCustomer ($db, $name, $phone, $email, $response='') {
  $sql = "INSERT INTO customer (name, phone, email) VALUES ('$name', '$phone', '$email')";

  if(mysqli_query($db, $sql)){
    echo "客戶建立成功: ".$response;
    return true;
  }else{
    echo "客戶建立失敗";
    return false;
  }
}

function prepare_file_and_email ($db, $showType, $showFile, $desc, $today, $customer_id='', $response='') {

  if(strlen($customer_id) === 0) {
    $sql = "SELECT id FROM customer WHERE name = '$name' && email = '$email'";
    $customer_id = mysqli_query($db, $sql);
    echo $customer_id;
  }

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
    //   $mail->Body = "<h3>Name: $name <br> Phone: $phone <br> Email: $email <br> Type: $showType <br> Files: $showFile <br> Message: $desc</h3>";
    //   $mail->send();
    //   // echo "Message sent!";

    //   $result = "\r\n姓名: $name\r\n 信箱: $email\r\n 電話: $phone\r\n 類別: $showType\r\n 檔案: $showFile\r\n 描述: $desc\r\n 日期: $today";

    //   //insert to  database
    //   $sql = "INSERT INTO commissions (type, customer_id, files, desc, create_date) VALUES ('$showType', '$customer_id', '$showFile', '$desc', '$today')";
      
    //   if(mysqli_query($db, $sql)){
    //     echo $response. $result;
    //   }else{
    //     echo "出錯: ".$sql."<br>".mysqli_error($db);
    //   }


    // }catch (Exception $e){
    //   echo "Mailer error: {$mail->ErrorInfo}";
    // }

}

if(isset($_FILES['files'])){
  $files = $_FILES['files']['name'];
  $showFile = json_encode($files);
}

if (isset($_POST["name"], $_POST["phone"], $_POST["email"], $_POST["types"], $_POST["desc"])){
    $name =  $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $types = $_POST["types"];
    $desc = $_POST["desc"];
  
    $desc = mb_convert_encoding($desc, "utf-8");
    $showType = json_encode($types);

    // echo "\r\n姓名: $name\r\n 信箱: $email\r\n 電話: $phone\r\n 類別: $showType\r\n 檔案: $showFile\r\n 描述: $desc\r\n 日期: $today";

    //Check if user exist
    $getCustomer = $pdo->prepare("SELECT id FROM ".$db.".customer WHERE name =:name and email=:email");
    $getCustomer -> execute(['name' => $name, 'email' => $email]);
    $existCustomer = $getCustomer -> fetch();
    // echo "customer: ".json_encode($existCustomer);
    if($existCustomer["id"]){
      echo "exist customer: ".$existCustomer["id"];
      $customer_id = $existCustomer["id"];

      // Old customer, proceed
      // prepare_file_and_email($db, $showType, $showFile, $desc, $today, $customer_id);
    }else{
      echo "fail to get customer: ".$response;

      $newCustomer = createCustomer($db, $name, $phone, $email);
      echo "newCustomer: ".$newCustomer;

      if($newCustomer === 1){
        // create customer, proceed
        prepare_file_and_email($db, $showType, $showFile, $desc, $today);
      }else{
        echo "fail to create customer: ".$response;
      }
    }
}else{
  echo "error";
}

// Close connection
$pdo = null;
?>