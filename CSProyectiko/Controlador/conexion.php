<?php
//DB details
$dbHost = 'localhost';
$dbUsername = 'miusuario';
$dbPassword = 'mipassword';
$dbName = 'proyecto';

//Create connection and select DB
$conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

if ($conn->connect_error) {
    die("No hay Conexion con la base de datos: " . $db->connect_error);
} 
?>