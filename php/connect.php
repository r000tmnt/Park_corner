<?php
//設定連線到資料庫
$dbHost = "localhost";
$dbUsername = "root";
$dbPassword = "poi98799";
$dbName = "commission_formdata";

$db = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);

//查看是否連線成成功
if(!$db){
    die("連線失敗: ".mysqli_connect_error());
}else{
    echo "連線成功";
}

mysqli_set_charset($db, "utf8");
?>