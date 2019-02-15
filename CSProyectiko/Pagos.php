<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
// include para la conexion a la bd
include 'Controlador/conexion.php';

// inicializar el carrito
include 'Modelo/La-carta.php';
$cart = new Cart;

// redirigir si el carrito esta vacio
if($cart->total_items() <= 0){
    header("Location: index.php");
}

$query = $conn->query("SELECT * FROM clientes WHERE id=(SELECT id FROM clientes WHERE email='". $_SESSION['email'] ."')");
$custRow = $query->fetch_array();

// añadir id del cliente a la sesion 
$_SESSION['sessCustomerID'] = $custRow[0];

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>R & V - Pago pedido</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <style>
        .container {
            padding: 20px;
        }

        .table {
            width: 65%;
            float: left;
        }

        .shipAddr {
            width: 30%;
            float: left;
            margin-left: 30px;
        }

        .footBtn {
            width: 95%;
            float: left;
        }

        .orderBtn {
            float: right;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="panel panel-default">
            <div class="panel-heading">

                <ul class="nav nav-pills">
                    <li role="presentation"><a href="index.php">Inicio</a></li>
                    <li role="presentation"><a href="verCarrito.php">Ver Carrito</a></li>
                    <li role="presentation" class="active"><a href="Pagos.php">Pagos</a></li>
                </ul>
            </div>

            <div class="panel-body">
                <h1>Vista previa de la Orden</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Pricio</th>
                            <th>Cantidad</th>
                            <th>Sub total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
        if($cart->total_items() > 0){
            //datos del carrito
            $cartItems = $cart->contents();
            foreach($cartItems as $item){
        ?>
                        <tr>
                            <td>
                                <?php echo $item["name"]; ?>
                            </td>
                            <td>
                                <?php echo $item["price"].'€'; ?>
                            </td>
                            <td>
                                <?php echo $item["qty"]; ?>
                            </td>
                            <td>
                                <?php echo $item["subtotal"].' €'; ?>
                            </td>
                        </tr>
                        <?php } }else{ ?>
                        <tr>
                            <td colspan="4">
                                <p>No hay articulos en tu carta......</p>
                            </td>
                            <?php } ?>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3"></td>
                            <?php if($cart->total_items() > 0){ ?>
                            <td class="text-center"><strong>Total
                                    <?php echo $cart->total().' €'; ?></strong></td>
                            <?php } ?>
                        </tr>
                    </tfoot>
                </table>
                <div class="shipAddr">
                    <h4>Detalles de envío</h4>
                    <p> Nombre:
                        <?php echo $custRow['nombre']; ?>
                    </p>
                    <p> Email:
                        <?php echo $custRow['email']; ?>
                    </p>
                    <p> Teléfono:
                        <?php echo $custRow['telefono']; ?>
                    </p>
                    <p> Dirección:
                        <?php echo $custRow['direccion']; ?>
                    </p>
                </div>
                <div class="footBtn">
                    <a href="index.php" class="btn btn-warning"><i class="glyphicon glyphicon-menu-left"></i> Continue
                        Comprando</a>
                    <a href="AccionCarta.php?action=placeOrder" class="btn btn-success orderBtn">Realizar pedido <i
                            class="glyphicon glyphicon-menu-right"></i></a>
                </div>
            </div>
        </div>
        
    </div>
</body>

</html>