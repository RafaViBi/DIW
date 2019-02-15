<?php
include 'Controlador/conexion.php';
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <?php
        include('Vista/head.php');
        if (!isset($_SESSION['username'])) {
        ?>
            <script src="Vista/js/articulosNoRegistrado.js"></script>
        <?php
        } else {
        ?>
            <script src="Vista/js/articulosRegistrado.js"></script>
        <?php
        }
    ?>
    <script src="Vista/js/secciones.js"></script>
</head>

<body>
    <div id="main">
        
        <?php
            include('Vista/cabecera.php');
        ?>
        <div class="panel-body">
            <?php
               $_SESSION['genero'] = $_GET['genero'];
               $_SESSION['tipo'] = $_GET['tipo'];
            ?>
            <h1><?php echo ucwords($_GET['genero']); ?> / <?php 
            
            if($_GET['tipo'] == "bebee"){
                echo Bebé;
            }
            if($_GET['tipo'] == "ninaa"){
                echo Niña;
            }
            if($_GET['tipo'] == "ninoo"){
                echo Niño;
            }
            
            if($_GET['tipo'] != "ninoo" && $_GET['tipo'] != "ninaa" && $_GET['tipo'] != "bebee"){
                echo ucwords(substr($_GET['tipo'], 0, -1)); 
            }
            
            ?> </h1>
            <div id="products" class="row list-group">
            <?php
                $query = $conn->query('SELECT * FROM mis_productos WHERE seccion="'. $_GET['genero'] .'" AND categoria="'. $_GET['tipo'] .'" ORDER BY id DESC');
                if($query->num_rows > 0){ 
                    while($row = $query->fetch_assoc()){
            ?>
                
                <div class="item col-lg-3">
                    <div class="polaroid">
                        <img src="Vista/img/<?php echo $_GET['genero']; ?>/<?php echo $row["rutaimg"]; ?>.jpg" style="width:100%">
                        <div class="datos">
                            <h4>
                                <?php echo utf8_decode($row["nombre"]); ?>
                            </h4>
                            <p>
                                <?php echo $row["descripcion"]; ?>
                            </p>
                            <div>
                                <div>
                                    <p class="lead">
                                        <?php echo $row["precio"].' €'; ?>
                                    </p>
                                </div>
                                <div>
                                    <?php
                                        if (empty($_SESSION)) {
                                        ?>
                                            <a class="btn btn-primary">Añadir al carrito</a>
                                        <?php
                                        } else {
                                        ?>
                                            <a class="btn btn-primary" href="AccionCarta.php?action=addToCart&id=<?php echo $row["id"]; ?>">Añadir al carrito</a>
                                        <?php
                                        }
                                    ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <?php } }else{ ?>
                <p>Producto(s) no existe.....</p>
                <?php } ?>
            </div>
        </div>
        <!--Panel cierra-->
        
        <!-- Inicio Sidenav -->

        <?php
            include('Vista/sidenav.php');
        ?>
    
        <!-- Final Sidenav -->
        
        <?php
            include('Vista/footer.php');
        ?>
        
    </div>
</body>

</html>