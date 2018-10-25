document.addEventListener("DOMContentLoaded", cargar, false);

function cargar() {
    document.getElementById("anyadir").addEventListener("click", iniciaInputs);
    document.getElementById("eliminar").addEventListener("click", eliminarInputs);
    document.getElementById("nuevo").addEventListener("click", nuevoForm);
}

function iniciaInputs() {
    var array = this.parentNode.getElementsByTagName("input");
    for (let i = 0; i < array.length; i++) {
        array[i].disabled = false; 
    }
}

function eliminarInputs() {   
    var empleado = this.parentNode;
    var jefe = empleado.parentNode;
    jefe.removeChild(empleado);
}

function nuevoForm() {
    var nodoPadre = document.getElementById("general");

    var div = document.createElement("div");
    div.setAttribute("class","form-inline");
    
    var label1 = document.createElement("label");
    label1.setAttribute("for", "dni");
    label1.innerHTML("DNI:");

    var input1 = document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("class","form-control");
    input1.setAttribute("id","dni");
    input1.setAttribute("type","text");

    var texto = document.createTextNode("En que año fue 1 + 1?");

    div.appendChild(label1);

    nodoPadre.appendChild(div);
}