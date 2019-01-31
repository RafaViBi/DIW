<?php

session_start();

    if (!isset($_SESSION['username'])) {
        include('noRegistrado.php'); //Usuario no log
    } else {
        include('registrado.php'); //Usuario log
    }
    
?>