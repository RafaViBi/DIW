document.addEventListener("DOMContentLoaded", cargar, false);

var acc;
var i;
var articulos;
var ip = window.location.host;

function cargar() {

    document.getElementById("openNav").addEventListener("click", openNav);
    document.getElementById("closeNav").addEventListener("click", closeNav);
    document.getElementById("reg").addEventListener("click",registro);
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
    
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("reg");
    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal.style.display = "block";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    articulos = document.getElementsByClassName("polaroid"); 
    
    for (i = 0; i <= acc.length; i++) {
        articulos[i].style.width = "300px";
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    articulos = document.getElementsByClassName("polaroid"); 
    
    for (i = 0; i <= acc.length; i++) {
        articulos[i].style.width = "350px";
    }
}

function retInicio() {
    location.href='http://' + ip + '/Proyectiko/index.php';
}

function verCarrito() {
    location.href='http://' + ip + '/Proyectiko/verCarrito.php';
}

function registro() {
    location.href='http://' + ip + '/Proyectiko/registro.php';
}