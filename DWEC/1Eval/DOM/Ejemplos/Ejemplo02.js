function colocarTextoDiv1() {
    
    var nodoPadre = document.getElementById("uno");

    var parrafo = document.createElement("p");

    var texto = document.createTextNode("En que año fue 1 + 1?");

    parrafo.appendChild(texto);

    nodoPadre.appendChild(parrafo);

}

function colocarTextoDiv2() {
    
    var nodoPadre = document.getElementById("dos");

    var parrafo = document.createElement("textarea");

    var texto = document.createTextNode("En que año fue 1 + 1?");

    parrafo.appendChild(texto);

    nodoPadre.appendChild(parrafo);

}

function colocarTextoDiv3() {
    
    var nodoPadre = document.getElementById("tres");

    var parrafo = document.createElement("div");

    var texto = document.createTextNode("En que año fue 1 + 1?");

    parrafo.appendChild(texto);

    nodoPadre.appendChild(parrafo);

}

function colocarTextoDiv4() {
    
    var nodoPadre = document.getElementById("cuatro");

    var parrafo = document.createElement("button");

    var texto = document.createTextNode("En que año fue 1 + 1?");

    parrafo.appendChild(texto);

    nodoPadre.appendChild(parrafo);

}