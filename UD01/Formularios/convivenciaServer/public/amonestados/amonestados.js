document.addEventListener("DOMContentLoaded", cargar, false);

function cargar() {

    document.getElementById("selector").addEventListener("change",orden);

}

function orden() {
    
    var alubia = document.getElementsByClassName("alumno");

    for (let index = 0; index < alubia.length; index++) {

        alubia[index].style.order = 0;
        
    }

    document.getElementById(document.getElementById("selector").value).style.order = -1;

}
