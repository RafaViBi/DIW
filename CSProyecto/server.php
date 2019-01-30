<?php
session_start();

// initializing variables
$username = "";
$email    = "";
$errors = array(); 

// connect to the database
include('conexion.php');
$db = $conn;

// REGISTER USER
if (isset($_POST['reg_user'])) {
  // receive all input values from the form
  $nombre = mysqli_real_escape_string($db, $_POST['nombre']);
  $email = mysqli_real_escape_string($db, $_POST['email']);
  $telefono = mysqli_real_escape_string($db, $_POST['telefono']);
  $direccion = mysqli_real_escape_string($db, $_POST['direccion']);
  $password_1 = mysqli_real_escape_string($db, $_POST['contra']);
  $password_2 = mysqli_real_escape_string($db, $_POST['repcontra']);

  // form validation: ensure that the form is correctly filled ...
  // by adding (array_push()) corresponding error unto $errors array
  if (empty($nombre)) { array_push($errors, "Registro: Nombre requerido"); }
  if (empty($email)) { array_push($errors, "Registro: Email requerido"); }
  if (empty($telefono)) { array_push($errors, "Registro: Número de telefono requerido"); }
  if (empty($direccion)) { array_push($errors, "Registro: Direccion requerida"); }
  if (empty($password_1)) { array_push($errors, "Registro: Contraseña requerida"); }
  if ($password_1 != $password_2) {
	array_push($errors, "Registro: Las dos contraseñas no coinciden");
  }

  // first check the database to make sure 
  // a user does not already exist with the same username and/or email
  $user_check_query = "SELECT * FROM clientes WHERE nombre='$username' OR email='$email' LIMIT 1";
  $result = mysqli_query($db, $user_check_query);
  $user = mysqli_fetch_assoc($result);
  
  if ($user) { // if user exists
    if ($user['email'] === $email) {
      array_push($errors, "Registro: El correo ya existe");
    }
  }

  // Finally, register user if there are no errors in the form
  if (count($errors) == 0) {
  	$password = md5($password_1);//encrypt the password before saving in the database

  	$query = "INSERT INTO clientes (nombre,email,direccion,telefono,contra) VALUES('$nombre', '$email', '$direccion', '$telefono', '$password')";
  	mysqli_query($db, $query);
  	$_SESSION['username'] = $nombre;
  	header('location: index.php');
  }
}

// LOGIN USER
if (isset($_POST['login_user'])) {
  $username = mysqli_real_escape_string($db, $_POST['correo']);
  $password = mysqli_real_escape_string($db, $_POST['contra']);

  if (empty($username)) {
  	array_push($errors, "Correo requerido");
  }
  if (empty($password)) {
  	array_push($errors, "Contraseña requerida");
  }

  if (count($errors) == 0) {
  	$password = md5($password);
  	$query = "SELECT * FROM clientes WHERE email='$username' AND contra='$password'";
  	$results = mysqli_query($db, $query);
  	if (mysqli_num_rows($results) == 1) {
  	    while($fila = mysqli_fetch_array($results)){
  	        $_SESSION['username'] = $fila['nombre'];
  	    }
  	    header('location: index.php');
  	}else {
  		array_push($errors, "Login: Fallo de autentificación de usuario");
  	}
  }
}

?>