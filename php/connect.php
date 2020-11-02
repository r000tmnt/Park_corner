<?php
//設定連線到資料庫
$dbHost = "localhost";
$dbUsername = "root";
$dbPassword = "poi98799";
$dbName = "commission_formdata";

$db = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

//查看是否連線成成功
if($db -> connect_error){
    die("連線失敗: ".$db -> connect_error);
}
?>