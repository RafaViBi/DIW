function crearParrafo() {
    
    var nodoPadre = document.getElementById("mono");

    var parrafo = document.createElement("p");

    var texto = document.createTextNode("En que año fue 1 + 1?");

    parrafo.appendChild(texto);

    nodoPadre.appendChild(parrafo);

}