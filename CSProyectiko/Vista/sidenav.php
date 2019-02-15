<div id="mySidenav" class="sidenav">
    <?php  if (isset($_SESSION['username'])) : ?>
	    <p>Bienvenido, <strong><?php echo $_SESSION['username']; ?></strong></p>
    <?php endif ?>
    <a id="closeNav" class="closebtn"></a>
    <button class="accordion">Hombres</button>
    <div id="hombres" class="subSecciones">
        <a id="prendash" class="apartado">Prendas</a>
        <a id="calzadosh" class="apartado">Calzados</a>
        <a id="lenceriah" class="apartado">Lencería</a>
    </div>
    <button class="accordion">Mujeres</button>
    <div id="mujeres" class="subSecciones">
        <a id="prendasm" class="apartado">Prendas</a>
        <a id="calzadosm" class="apartado">Calzados</a>
        <a id="lenceriam" class="apartado">Lencería</a>
    </div>
    <button class="accordion">Infantil</button>
    <div id="infantil" class="subSecciones">
        <a id="bebee" class="apartado">Bebé</a>
        <a id="ninaa" class="apartado">Niña</a>
        <a id="ninoo" class="apartado">Niño</a>
    </div>
</div>