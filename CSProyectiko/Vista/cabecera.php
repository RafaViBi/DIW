<div id="home" class="header">
    <div class="logo">
        <img id="inicio" src="Vista/img/logo.png" alt="">
    </div>
    <div class="btns">
        <button id="openNav" class="fa fa-list" style="font-size:20px;" data-toggle="tooltip" data-placement="bottom"
            title="Secciones"></button>
        <button id="carrito" class="fa fa-shopping-cart" data-toggle="tooltip" data-placement="bottom" title="Carrito"></button>
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