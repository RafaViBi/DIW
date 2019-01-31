document.addEventListener("DOMContentLoaded", cargar, false);

var ip = "52.214.73.33";

function cargar() {
    
    document.getElementById("out").addEventListener("click",logOut);
    document.getElementById("inicio").addEventListener("click",retInicio);
    
}

function logOut() {
    location.href='http://' + ip + ':8080/PROYECTO/logout.php';
}

function retInicio() {
    location.href='http://' + ip + ':8080/PROYECTO/index.php';
}