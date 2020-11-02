<?php
error_reporting(E_ALL);

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



$allow_ext = array("pdf", "doc", "docx", "jpg", "png", "jpeg", "gif");
//$files = array_filter($_FILES['files']['name']);
//something like that to be used before processing files.

// Count # of uploaded files in array
if(is_countable($totalFile)){
    $totalFile = count($_FILES['files']['name']);
}

foreach($_FILES['files']["tmp_name"] as $key => $value){
  $targetPath = "uploads/" . basename($_FILES['files']['name'][$key]);
  move_uploaded_file($value, $targetPath);
}

$showFile = json_encode($files);
$showType = json_encode($checkBoxes);

$result = "\r\n姓名: $name\r\n 信箱: $email\r\n 電話: $phone\r\n 類別: $showType\r\n 檔案: $showFile\r\n 描述: $detail";

echo $responce. $result;
?>