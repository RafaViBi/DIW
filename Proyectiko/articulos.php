<?php
include 'conexion.php';
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
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <link rel="shortcut icon" type="image/png" href="img/logo.png" />
    <style>
        div.polaroid {
            width: 250px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            text-align: center;
        }
        
        div.datos {
            padding: 10px;
        }
        .cart-link {
            width: 100%;
            text-align: right;
            display: block;
            font-size: 22px;
        }
        
        .item {
            padding-left: 5%;
        }
        
    </style>
</head>
</head>

<body>
    <div>

        <div id="home" class="header">
            <div class="logo">
                <img id="inicio" src="img/logo.png" alt="">
            </div>
            <div class="btns">
                <button id="carrito" class="fa fa-shopping-cart" data-toggle="tooltip" data-placement="bottom" title="Carrito"></button>
                <button class="fa fa-search" data-toggle="tooltip" data-placement="bottom" title="Buscar"></button>
                <?php
                        if (!isset($_SESSION['username'])) {
                            ?>
                <button id="reg" class="fa fa-sign-in" data-toggle="tooltip" data-placement="bottom" title="Log"></button>
                <?php
                        } else {
                            ?>
                <button id="out" class="fa fa-sign-in" data-toggle="tooltip" data-placement="bottom" title="Logout"
                    style="color:red"></button>
                <?php
                        }
                        ?>
            </div>
        </div>

        <ul class="nav nav-pills">
            <li role="presentation" class="active"><a href="index.php">Inicio</a></li>
            <li role="presentation"><a href="verCarrito.php">Ver Carrito</a></li>
            <li role="presentation"><a href="Pagos.php">Pagos</a></li>
        </ul>
    </div>

    <div class="panel-body">
        <!-- Cambiar titulo mis productos por las migas de pan  -->
        <h1>Mis Productos</h1>
        <div id="products" class="row list-group">
            <?php
        //get rows query
        $query = $db->query("SELECT * FROM mis_productos ORDER BY id DESC LIMIT 10");
        if($query->num_rows > 0){ 
            while($row = $query->fetch_assoc()){
        ?>
            
            <div class="item col-lg-3">
                <div class="polaroid">
                    <img src="img/jeans.jpg" alt="Norway" style="width:100%">
                    <div class="datos">
                        <h4>
                            <?php echo $row["name"]; ?>
                        </h4>
                        <p>
                            <?php echo $row["description"]; ?>
                        </p>
                        <div>
                            <div>
                                <p class="lead">
                                    <?php echo $row["price"].' €'; ?>
                                </p>
                            </div>
                            <div>
                                <a class="btn btn-success" href="AccionCarta.php?action=addToCart&id=<?php echo $row["id"]; ?>">Añadir al carrito</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <?php } }else{ ?>
            <p>Producto(s) no existe.....</p>
            <?php } ?>
        </div>
        <!--Panek cierra-->

    </div>
</body>

</html>