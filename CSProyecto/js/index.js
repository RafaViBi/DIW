document.addEventListener("DOMContentLoaded", cargar, false);

var ip = "52.214.73.33";

function cargar() {
    
    document.getElementById("reg").addEventListener("click",registrar);
    document.getElementById("inicio").addEventListener("click",retInicio);

}

function registrar() {
    location.href='http://' + ip + ':8080/PROYECTO/registro.php';
}

function retInicio() {
    location.href='http://' + ip + ':8080/PROYECTO/index.php';
}