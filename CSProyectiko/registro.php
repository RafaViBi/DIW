<?php 
    include('Controlador/server.php');

    if (!empty($_SESSION)) {
        header('Location: index.php');
    }
    
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>R & V</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="Vista/css/index.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="Vista/css/registro.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="Vista/js/index.js"></script>

    <link rel="shortcut icon" type="image/png" href="Vista/img/logo.png" />
</head>

<body>

    <?php include('Controlador/errors.php'); ?>

    <div class="container">
        <div class="row">
            <div class="vl">
            </div>
            <div class="col">
                <center>REGISTRO<center>
                    <form action="registro.php" method="POST">
                        Nombre:<input type="text" name="nombre" placeholder="Nombre" id="nombre" required>
                        Correo electronico: <input type="email" name="email" placeholder="Correo electronico" id="email"
                            required>
                        Teléfono:<input type="text" name="telefono" placeholder="telefono" id="telefono" required>
                        Dirección:<input type="text" name="direccion" placeholder="Dirección" id="direccion" required>
                        Contraseña:<input type="password" name="contra" placeholder="Contraseña" id="contrasenya" required>
                        Repetir contraseña:<input type="password" name="repcontra" placeholder="Repetir contraseña" id="contrasenyaRepe"
                            required>
                       <button type="submit" class="btn" name="reg_user">Registro</button>
                    </form>
            </div>
            <div class="col">
                <center>LOGIN<center>
                    <form action="registro.php" method="POST">
                        Correo:<input type="text" name="correo" placeholder="Correo electronico" id="correo" required>
                        Contraseña:<input type="password" name="contra" placeholder="Contraseña" id="contra" required>
                        <button type="submit" class="btn" name="login_user">Login</button>
                    </form>
            </div>
        </div>
    </div>
    
</body>

</html>