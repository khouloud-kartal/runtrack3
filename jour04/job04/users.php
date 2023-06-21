<?php 

$server = "localhost";
$username = "root";
$password = "";
$db = "utilisateurs";

$conn = new PDO("mysql:host=$server;dbname=$db", $username, $password);

$req = "SELECT * FROM utilisateurs";
$request = $conn->prepare($req);
$request->execute();
$data = $request->fetchAll(\PDO::FETCH_ASSOC);


echo json_encode($data);
?>