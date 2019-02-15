<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <?php
        include('Vista/head.php');
        if (!isset($_SESSION['username'])) {
        ?>
            <script src="Vista/js/noRegistrado.js"></script>
        <?php
        } else {
        ?>
            <script src="Vista/js/registrado.js"></script>
        <?php
        }
    ?>
    <script src="Vista/js/secciones.js"></script>
</head>

<body>

    <!-- Inicio Body -->

    <div id="main">
        <?php
            include('Vista/cabecera.php');
        ?>  

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

        <?php
            include('Vista/footer.php');
        ?>
        
    </div>

    <!-- Final Body  -->
    <!-- Inicio Sidenav -->

    <?php
        include('Vista/sidenav.php');
    ?>

    <!-- Final Sidenav -->

</body>

</html>