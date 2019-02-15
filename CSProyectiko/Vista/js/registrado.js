document.addEventListener("DOMContentLoaded", cargar, false);

var acc;
var i;
var ip = window.location.host;

function cargar() {

    document.getElementById("openNav").addEventListener("click", openNav);
    document.getElementById("closeNav").addEventListener("click", closeNav);
    document.getElementById("out").addEventListener("click",logOut);
    document.getElementById("inicio").addEventListener("click",retInicio);
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
}

function logOut() {
    location.href='http://' + ip + '/Proyectiko/Controlador/logout.php';
}

function retInicio() {
    location.href='http://' + ip + '/Proyectiko/index.php';
}

function verCarrito() {
    location.href='http://' + ip + '/Proyectiko/verCarrito.php';
}