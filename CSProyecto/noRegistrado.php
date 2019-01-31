<?php
session_start();
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>R & V</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="css/out.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <script src="js/index.js"></script>

    <link rel="shortcut icon" type="image/png" href="img/logo.png" />
</head>

<body>

    <div id="home" class="header">
        <div class="logo">
            <img id="inicio" src="img/logo.png" alt="">
        </div>
        <div class="secciones">
            <div class="categorias">
                <a href="vista/mujer.php">Mujer</a>
            </div>
            <div class="categorias">
                <a href="vista/hombre.php">Hombre</a>
            </div>
            <div class="categorias">
                <a href="vista/infantil.php">Infantil</a>
            </div>
        </div>
        <div class="btns">
            <button class="fa fa-shopping-cart"></button>
            <button class="fa fa-search"></button>
            <button id="reg" class="fa fa-sign-in"></button>
        </div>
    </div>
    
    <?php
        include('parallax.php');
        include('footer.php');
    ?>
    

</body>

</html>