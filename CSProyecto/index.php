<?php

session_start();

    if (!isset($_SESSION['username'])) {
        include('out.php');
    } else {
        include('in.php');
    }
    
?>