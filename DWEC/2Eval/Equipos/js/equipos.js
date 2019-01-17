document.addEventListener("DOMContentLoaded", cargar, false);

function cargar() {

    document.getElementById("g2").addEventListener("drop",drop);
    document.getElementById("g2").addEventListener("dragover",allowDrop);
    document.getElementById("fnatic").addEventListener("drop",drop);
    document.getElementById("fnatic").addEventListener("dragover",allowDrop);

    var jugadores = document.getElementsByClassName("jugador");
    
    for (let index = 0; index < jugadores.length; index++) {
        jugadores[index].addEventListener("dragstart",drag);
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}