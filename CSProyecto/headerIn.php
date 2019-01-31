<div class="header">
    <div class="logo">
        <img id="inicio" src="img/logo.png" alt="">
    </div>
    <div class="secciones">
        <div class="categorias">
            <a href="">Mujer</a>
        </div>
        <div class="categorias">
            <a href="">Hombre</a>
        </div>
        <div class="categorias">
            <a href="">Infantil</a>
        </div>
    </div>
    <div class="info">
        <?php  if (isset($_SESSION['username'])) : ?>
            <p>Bienvenido, <strong><?php echo $_SESSION['username']; ?></strong></p>
        <?php endif ?>
    </div>
    <div class="btns">
        <button class="fa fa-shopping-cart"></button>
        <button class="fa fa-search"></button>
        <button id="out" class="fa fa-sign-in"></button>
    </div>
</div>