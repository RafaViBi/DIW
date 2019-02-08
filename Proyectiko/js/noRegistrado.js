document.addEventListener("DOMContentLoaded", cargar, false);

var acc;
var i;
var ip = "34.253.44.181";

function cargar() {

    document.getElementById("openNav").addEventListener("click", openNav);
    document.getElementById("closeNav").addEventListener("click", closeNav);
    document.getElementById("reg").addEventListener("click",registrar);
    document.getElementById("inicio").addEventListener("click",retInicio);
    document.getElementById("prendas").addEventListener("click",articulos);
    document.getElementById("carrito").addEventListener("click",verCarrito);
    
    acc = document.getElementsByClassName("accordion");

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

    window.addEventListener('mouseup',function (event) {
        var box = document.getElementById('mySidenav');
        if (event.target != box && event.target.parentNode != box ) {
            closeNav();            
        }
    });
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    location.href = javascript.void(0);
}

function registrar() {
    location.href='http://' + ip + ':8080/Proyectiko/registro.php';
}

function retInicio() {
    location.href='http://' + ip + ':8080/Proyectiko/index.php';
}

function articulos() {
    location.href='http://' + ip + ':8080/Proyectiko/articulos.php';
}

function verCarrito() {
    location.href='http://' + ip + ':8080/Proyectiko/verCarrito.php';
}