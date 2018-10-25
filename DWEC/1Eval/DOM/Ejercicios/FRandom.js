document.addEventListener("DOMContentLoaded", cargar, false);

var contador = "1";

function cargar() {

    var anyadir = document.getElementsByClassName("anyadir");
    for (var i = 0; i < anyadir.length; i++) {
        anyadir[i].addEventListener('click', editarInputs, false);
    }

    var eliminar = document.getElementsByClassName("eliminar");
    for (var i = 0; i < eliminar.length; i++) {
        eliminar[i].addEventListener('click', preguntaEliminar, false);
    }

    document.getElementById("nuevo").addEventListener("click", nuevoForm);
}

function editarInputs() {
    var array = this.parentNode.getElementsByTagName("input");
    for (let i = 0; i < array.length; i++) {
        array[i].disabled = false;
    }
}

function eliminarInputs(element) {
    var empleado = element.parentNode;
    var jefe = empleado.parentNode;
    jefe.removeChild(empleado);
}

function nuevoForm() {

    idDni = "dni" + contador;
    idNombre = "nombre" + contador;
    idApellidos = "apellidos" + contador;

    var nodoPadre = document.getElementById("general");

    var div = document.createElement("div");
    div.setAttribute("class", "form-inline");

    //DNI
    var label1 = document.createElement("label");
    label1.setAttribute("for", idDni);
    label1.innerText = "DNI:";

    var input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("class", "form-control");
    input1.setAttribute("id", idDni);
    input1.setAttribute("type", "text");
    input1.disabled = true;
    input1.addEventListener("blur", comprobarInputs);

    //Nombre
    var label2 = document.createElement("label");
    label2.setAttribute("for", idNombre);
    label2.innerText = "Nombre:";

    var input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("class", "form-control");
    input2.setAttribute("id", idNombre);
    input2.setAttribute("type", "text");
    input2.disabled = true;
    input2.addEventListener("blur", comprobarInputs);

    //Apellidos
    var label3 = document.createElement("label");
    label3.setAttribute("for", idApellidos);
    label3.innerText = "Apellidos:";

    var input3 = document.createElement("input");
    input3.setAttribute("type", "text");
    input3.setAttribute("class", "form-control");
    input3.setAttribute("id", idApellidos);
    input3.setAttribute("type", "text");
    input3.disabled = true;
    input3.addEventListener("blur", comprobarInputs);

    //Botones
    var boton1 = document.createElement("button");
    boton1.setAttribute("class", "eliminar");
    boton1.setAttribute("class", "btn btn-default delete");
    boton1.innerText = "X";
    boton1.addEventListener("click", preguntaEliminar);
    boton1.disabled = true;

    var boton2 = document.createElement("button");
    boton2.setAttribute("class", "anyadir");
    boton2.setAttribute("class", "btn btn-default new");
    boton2.addEventListener("click", editarInputs);

    var imagen = document.createElement("img");
    imagen.setAttribute("src", "lapiz.png");

    //Añadir hijos al padre
    div.appendChild(label1);
    div.appendChild(input1);
    div.appendChild(label2);
    div.appendChild(input2);
    div.appendChild(label3);
    div.appendChild(input3);
    div.appendChild(boton1);
    div.appendChild(boton2);
    boton2.appendChild(imagen);

    nodoPadre.appendChild(div);

    contador++;
    cargar();
}

function preguntaEliminar() {
    var pregunta = confirm("¿Estas seguro?");
    if (pregunta) {
        eliminarInputs(this);
    }
}

function comprobarInputs() {
    var cont = 0;
    var valorInput = this.id;
    var jefe = valorInput.parentNode;
    var inputs = jefe.getElementsByTagName("inputs");
    var eliminar = document.getElementsByClassName(eliminar);

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value != "") {
            cont++;
        }
    }

    if (cont == 2) {
        alert("WIIII");
    }
}