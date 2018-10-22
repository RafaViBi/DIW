function adiosSombra(elemento) {
    document.getElementById(elemento.id).style.boxShadow="none";
    document.getElementById(elemento.id).style.transition="none";
}

function sombraInterior(elemento) {
    document.getElementById(elemento.id).style.boxShadow="inset 5px 5px 25px rgba(0,0,0,0.75)";
    document.getElementById(elemento.id).style.transition="none";
}

function redondito(elemento) {
    document.getElementById(elemento.id).style.borderRadius="50%";
    document.getElementById(elemento.id).style.transition="all 1.5s ease-in-out";
}

function holaSombra(elemento) {
    document.getElementById(elemento.id).style.boxShadow="10px 10px 5px rgba(0,0,0,0.75)";
    document.getElementById(elemento.id).style.transition="none";
}

function eliminarDiv(elemento) {
    /*var nodoEliminar = document.getElementById(elemento.id); */
    var empleado = elemento.parentNode;
    var jefe = empleado.parentNode;
    jefe.removeChild(empleado);
}

function cuadradito(elemento) {
    document.getElementById(elemento.id).style.borderRadius="0%";
    document.getElementById(elemento.id).style.transition="all 1.5s ease-in-out";
}