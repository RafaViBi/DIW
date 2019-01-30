document.addEventListener("DOMContentLoaded", cargar, false);

function cargar() {
    
    document.getElementById("reg").addEventListener("click",registrar);
    document.getElementById("inicio").addEventListener("click",retInicio);

}

function registrar() {
    location.href='http://54.171.171.163:8080/PROYECTO/registro.php';
}

function retInicio() {
    location.href='http://54.171.171.163:8080/PROYECTO/index.php';
}