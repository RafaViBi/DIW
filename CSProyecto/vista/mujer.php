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
    <link rel="stylesheet" type="text/css" media="screen" href="../css/out.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <script src="../js/index.js"></script>

    <link rel="shortcut icon" type="image/png" href="../img/logo.png" />
</head>

<body>

    <?php
        if (!isset($_SESSION['username'])) {
            include('../header.php'); //Usuario no log
        } else {
            include('../headerIn.php'); //Usuario log
        }
        
        include('../footer.php');
    ?>
    

</body>

</html>