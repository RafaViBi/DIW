document.addEventListener("DOMContentLoaded", cargar, false);

function cargar() {
    
    document.getElementById("out").addEventListener("click",logOut);
    document.getElementById("inicio").addEventListener("click",retInicio);
    
}

function logOut() {
    location.href='http://54.171.171.163:8080/PROYECTO/logout.php';
}

function retInicio() {
    location.href='http://54.171.171.163:8080/PROYECTO/index.php';
}