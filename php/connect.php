<?php
header('Access-Control-Allow-Methods: GET, POST');
//設定連線到資料庫
$userName = "root"; // your db username
$password = "!poi98788"; // your db user password
$db = "parkcorner_db";
$host = 'mysql:host=localhost;debname='.$db.';chartset=utf8';

$pdo = new PDO($host, $userName, $password);

$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>