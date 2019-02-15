document.addEventListener("DOMContentLoaded", cargar, false);

var ip = window.location.host;

function cargar() {
    
    /* Añadir por clase la funcion a los apartados*/
    var sec = document.getElementsByClassName("apartado");

    for (var i = 0; i < sec.length; i++) {
        sec[i].addEventListener("click", sacarConsulta);
    }
}

function sacarConsulta() {
    
    // Sacar la id del hijo
    var tipo = this.id;
    
    // Sacar la id del elemento padre
    var genero = this.parentNode.id;
    
    location.href="http://" + ip + "/Proyectiko/articulos.php?genero="+genero+"&tipo="+tipo;
    
}