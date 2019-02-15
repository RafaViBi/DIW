<?php
date_default_timezone_set("Europe/Madrid");

//Iniciamos sesion
session_start();

// Iniciamos la clase de la carta
include 'Modelo/La-carta.php';
$cart = new Cart;

// include de la conexion a la bd
include 'Controlador/conexion.php';
if(isset($_REQUEST['action']) && !empty($_REQUEST['action'])){
    
    // Añadir al carrito
    if($_REQUEST['action'] == 'addToCart' && !empty($_REQUEST['id'])){
        $productID = $_REQUEST['id'];
        // detalles del producto
        $query = $conn->query("SELECT * FROM mis_productos WHERE id = ".$productID);
        $row = $query->fetch_assoc();
        $itemData = array(
            'id' => $row['id'],
            'name' => $row['nombre'],
            'price' => $row['precio'],
            'qty' => 1
        );
        
        $insertItem = $cart->insert($itemData);
        $rutaArticulos = 'articulos.php?genero='.$_SESSION['genero'].'&tipo='.$_SESSION['tipo'];
        $redirectLoc = $insertItem?$rutaArticulos:'index.php';
        header("Location: ".$redirectLoc);
        
        // Actualizar carrito
    }elseif($_REQUEST['action'] == 'updateCartItem' && !empty($_REQUEST['id'])){
        $itemData = array(
            'rowid' => $_REQUEST['id'],
            'qty' => $_REQUEST['qty']
        );
        $updateItem = $cart->update($itemData);
        echo $updateItem?'ok':'err';die;
        
        // Eliminar del carrito
    }elseif($_REQUEST['action'] == 'removeCartItem' && !empty($_REQUEST['id'])){
        $deleteItem = $cart->remove($_REQUEST['id']);
        header("Location: verCarrito.php");
    }elseif($_REQUEST['action'] == 'placeOrder' && $cart->total_items() > 0 && !empty($_SESSION['sessCustomerID'])){
        // insertar orden en la bd
        $insertOrder = $conn->query("INSERT INTO orden (customer_id, total_price, created, modified) VALUES ('".$_SESSION['sessCustomerID']."', '".$cart->total()."', '".date("Y-m-d H:i:s")."', '".date("Y-m-d H:i:s")."')");
        
        if($insertOrder){
            $orderID = $conn->insert_id;
            $sql = '';
            // insertar la orden al carrito
            $cartItems = $cart->contents();
            foreach($cartItems as $item){
                $sql .= "INSERT INTO orden_articulos (order_id, product_id, quantity) VALUES ('".$orderID."', '".$item['id']."', '".$item['qty']."');";
            }
            // insertar los datos de la orden en la bd
            $insertOrderItems = $conn->multi_query($sql);
            
            if($insertOrderItems){
                $cart->destroy();
                header("Location: OrdenExito.php?id=$orderID");
            }else{
                header("Location: Pagos.php");
            }
        }else{
            header("Location: Pagos.php");
        }
    }else{
        header("Location: index.php");
    }
}else{
    header("Location: index.php");
}