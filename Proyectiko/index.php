<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>R & V</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="css/index.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="shortcut icon" type="image/png" href="img/logo.png" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <?php
        if (!isset($_SESSION['username'])) {
        ?>
            <script src="js/noRegistrado.js"></script>
        <?php
        } else {
        ?>
            <script src="js/registrado.js"></script>
        <?php
        }
    ?>
    
</head>

<body>

    <!-- Inicio Body -->

    <div id="main">
        <div id="home" class="header">
            <div class="logo">
                <img id="inicio" src="img/logo.png" alt="">
            </div>
            <div class="btns">
                <button id="openNav" class="fa fa-list" style="font-size:20px;" data-toggle="tooltip" data-placement="bottom"
                    title="Secciones"></button>
                <button id="carrito" class="fa fa-shopping-cart" data-toggle="tooltip" data-placement="bottom" title="Carrito"></button>
                <button class="fa fa-search" data-toggle="tooltip" data-placement="bottom" title="Buscar"></button>
                <?php
                if (!isset($_SESSION['username'])) {
                    ?>
                    <button id="reg" class="fa fa-sign-in" data-toggle="tooltip" data-placement="bottom" title="Log"></button>
                    <?php
                } else {
                    ?>
                    <button id="out" class="fa fa-sign-in" data-toggle="tooltip" data-placement="bottom" title="Logout" style="color:red"></button>
                    <?php
                }
                ?>
            </div>
        </div>

        <!-- Retocar seccion de secciones -->
        <div class="content">
            <div class="bgimg-1">
                <div class="caption">
                    <span class="border">Moda Mujer</span>
                </div>
            </div>

            <div class="info">
                <p>Toda la ropa y calzado para todo tipo de mujer.</p>
            </div>

            <div class="bgimg-2">
                <div class="caption">
                    <span class="border">Moda Hombre</span>
                </div>
            </div>

            <div class="info">
                <p>Toda la ropa y calzado para todo tipo de hombre.</p>
            </div>

            <div class="bgimg-3">
                <div class="caption">
                    <span class="border">Moda Infantil</span>
                </div>
            </div>

            <div class="info">
                <p>Ropa tanto para bebés, niños o niñas.</p>
            </div>

        </div>

        <div class="footer w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
            <a href="#home" class="w3-button w3-light-grey"><i class="fa fa-arrow-up w3-margin-right"></i>To the top</a>
            <div class="w3-xlarge w3-section social">
                <i class="fa fa-facebook-official w3-hover-opacity"></i>
                <i class="fa fa-instagram w3-hover-opacity"></i>
                <i class="fa fa-snapchat w3-hover-opacity"></i>
                <i class="fa fa-pinterest-p w3-hover-opacity"></i>
                <i class="fa fa-twitter w3-hover-opacity"></i>
                <i class="fa fa-linkedin w3-hover-opacity"></i>
            </div>
            <p>Powered by Rafael Villanueva Bioque</p>
        </div>
    </div>

    <!-- Final Body  -->
    <!-- Inicio Sidebar -->

    <div id="mySidenav" class="sidenav">
        <?php  if (isset($_SESSION['username'])) : ?>
    	    <p>Bienvenido, <strong><?php echo $_SESSION['username']; ?></strong></p>
        <?php endif ?>
        <a id="closeNav" class="closebtn"></a>
        <button class="accordion">Hombres</button>
        <div class="subSecciones">
            <a href="#home">Prendas</a>
            <a href="#about">Calzados</a>
            <a href="#about">Lencería</a>
        </div>
        <button class="accordion">Mujeres</button>
        <div class="subSecciones">
            <a id="prendas">Prendas</a>
            <a href="#about">Calzados</a>
            <a href="#about">Lencería</a>
        </div>
        <button class="accordion">Niños</button>
        <div class="subSecciones">
            <a href="#home">Bebé</a>
            <a href="#about">Niña</a>
            <a href="#contact">Niño</a>
        </div>
    </div>

    <!-- Final Sidebar -->

    <script>
        $(document).ready(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
    </script>

</body>

</html>