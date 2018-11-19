window.onload = function () {
    document.onkeyup = moverPiezas;
}


function moverPiezas(evObject) {

    var teclaPulsada = evObject.keyCode;
    var rojo = document.getElementById("rojo");
    var azul = document.getElementById("azul");

    if (teclaPulsada == 98) { azul.style.marginBottom = "50px" } // Tecla 2

    else if (teclaPulsada == 100) { azul.style.marginLeft = "-50px" } // Tecla 4
    
    else if (teclaPulsada == 102){ azul.style.marginRight = "50px" } // Tecla 6

    else if (teclaPulsada == 104){ azul.style.marginTop = "-50px" } // Tecla 8

    else if (teclaPulsada == 88) { rojo.style.marginBottom = "50px" } // Tecla x
    
    else if (teclaPulsada == 65){ rojo.style.left = parseInt(rojo.style.left) - 5 + "px" } // Tecla a

    else if (teclaPulsada == 68){ rojo.style.marginRight = "50px" } // Tecla d

    else if (teclaPulsada == 87) { rojo.style.marginTop = "-50px" } // Tecla w

}