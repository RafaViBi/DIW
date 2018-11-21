window.addEventListener("load", cargar, false);

window.onload = function () {
    document.onkeyup = pulsarTeclas;
}

var contadorComa = 0;
var contadorPorciento = 0;

function cargar() {
    // 0
    document.getElementById("n0").addEventListener("mousedown", sombra);
    document.getElementById("n0").addEventListener("mouseup", noSombra);
    document.getElementById("n0").addEventListener("click", addNumero);
    // 1
    document.getElementById("n1").addEventListener("mousedown", sombra);
    document.getElementById("n1").addEventListener("mouseup", noSombra);
    document.getElementById("n1").addEventListener("click", addNumero);
    // 2
    document.getElementById("n2").addEventListener("mousedown", sombra);
    document.getElementById("n2").addEventListener("mouseup", noSombra);
    document.getElementById("n2").addEventListener("click", addNumero);
    // 3
    document.getElementById("n3").addEventListener("mousedown", sombra);
    document.getElementById("n3").addEventListener("mouseup", noSombra);
    document.getElementById("n3").addEventListener("click", addNumero);
    // 4
    document.getElementById("n4").addEventListener("mousedown", sombra);
    document.getElementById("n4").addEventListener("mouseup", noSombra);
    document.getElementById("n4").addEventListener("click", addNumero);
    // 5
    document.getElementById("n5").addEventListener("mousedown", sombra);
    document.getElementById("n5").addEventListener("mouseup", noSombra);
    document.getElementById("n5").addEventListener("click", addNumero);
    // 6
    document.getElementById("n6").addEventListener("mousedown", sombra);
    document.getElementById("n6").addEventListener("mouseup", noSombra);
    document.getElementById("n6").addEventListener("click", addNumero);
    // 7
    document.getElementById("n7").addEventListener("mousedown", sombra);
    document.getElementById("n7").addEventListener("mouseup", noSombra);
    document.getElementById("n7").addEventListener("click", addNumero);
    // 8
    document.getElementById("n8").addEventListener("mousedown", sombra);
    document.getElementById("n8").addEventListener("mouseup", noSombra);
    document.getElementById("n8").addEventListener("click", addNumero);
    // 9
    document.getElementById("n9").addEventListener("mousedown", sombra);
    document.getElementById("n9").addEventListener("mouseup", noSombra);
    document.getElementById("n9").addEventListener("click", addNumero);
    // C
    document.getElementById("reset").addEventListener("mousedown", sombra);
    document.getElementById("reset").addEventListener("mouseup", noSombra);
    document.getElementById("reset").addEventListener("click", reset);
    // %
    document.getElementById("porc").addEventListener("mousedown", sombra);
    document.getElementById("porc").addEventListener("mouseup", noSombra);
    document.getElementById("porc").addEventListener("click", addPorcentaje);
    // <<
    document.getElementById("eli").addEventListener("mousedown", sombra);
    document.getElementById("eli").addEventListener("mouseup", noSombra);
    document.getElementById("eli").addEventListener("click", borrar);
    // /
    document.getElementById("divi").addEventListener("mousedown", sombra);
    document.getElementById("divi").addEventListener("mouseup", noSombra);
    document.getElementById("divi").addEventListener("click", addOperacion);
    // x
    document.getElementById("multi").addEventListener("mousedown", sombra);
    document.getElementById("multi").addEventListener("mouseup", noSombra);
    document.getElementById("multi").addEventListener("click", addOperacion);
    // -
    document.getElementById("restar").addEventListener("mousedown", sombra);
    document.getElementById("restar").addEventListener("mouseup", noSombra);
    document.getElementById("restar").addEventListener("click", addOperacion);
    // +
    document.getElementById("sumar").addEventListener("mousedown", sombra);
    document.getElementById("sumar").addEventListener("mouseup", noSombra);
    document.getElementById("sumar").addEventListener("click", addOperacion);
    // .
    document.getElementById("punto").addEventListener("mousedown", sombra);
    document.getElementById("punto").addEventListener("mouseup", noSombra);
    document.getElementById("punto").addEventListener("click", addComa);
    // ()
    document.getElementById("paren").addEventListener("mousedown", sombra);
    document.getElementById("paren").addEventListener("mouseup", noSombra);
    document.getElementById("paren").addEventListener("click", addParentesis);
    // =
    document.getElementById("igual").addEventListener("mousedown", sombra);
    document.getElementById("igual").addEventListener("mouseup", noSombra);
    document.getElementById("igual").addEventListener("click", calcResultado);
}

function sombra() {
    document.getElementById(this.id).style.boxShadow="inset 5px 5px 25px rgba(0,0,0,0.75)";
}

function noSombra() {
    document.getElementById(this.id).style.boxShadow="";
}

function addNumero() {
    var numero = document.getElementById("text").value;
    var cadena = this.id;
    var n = cadena.substr(-1);

    if (numero == 0) {
        document.getElementById("text").value = n;
    } else if(numero.substr(-1) != ")") {
        document.getElementById("text").value = numero + n;
    }
}

function addOperacion() {
    var numero = document.getElementById("text").value;
    var cadena = this.id;

    if (cadena == "sumar" && numero.substr(-1) != "%" && numero.substr(-1) != "." && numero.substr(-1) != "+" && numero.substr(-1) != "-" && numero.substr(-1) != "*" && numero.substr(-1) != "/") {
        document.getElementById("text").value = numero + "+";
    }

    if (cadena == "restar" && numero.substr(-1) != "%" && numero.substr(-1) != "." && numero.substr(-1) != "+" && numero.substr(-1) != "-" && numero.substr(-1) != "*" && numero.substr(-1) != "/") {
        document.getElementById("text").value = numero + "-";
    }

    if (cadena == "multi" && numero.substr(-1) != "%" && numero.substr(-1) != "." && numero.substr(-1) != "+" && numero.substr(-1) != "-" && numero.substr(-1) != "*" && numero.substr(-1) != "/") {
        document.getElementById("text").value = numero + "*";
    }

    if (cadena == "divi" && numero.substr(-1) != "%" && numero.substr(-1) != "." && numero.substr(-1) != "+" && numero.substr(-1) != "-" && numero.substr(-1) != "*" && numero.substr(-1) != "/") {
        document.getElementById("text").value = numero + "/";
    }
}

function reset() {
    document.getElementById("text").value = "0";
    contadorComa = 0;
}

function borrar() {
    var numero = document.getElementById("text").value;

    if (numero.length == "1") {
        document.getElementById("text").value = 0;
    } else {
        document.getElementById("text").value = numero.slice(0,-1);
    }
}

function addComa() {
    var numero = document.getElementById("text").value;

    if (numero.substr(-1) != "." && numero.substr(-1) != ")" && numero.substr(-1) != "+" && numero.substr(-1) != "-" && numero.substr(-1) != "*" && numero.substr(-1) != "/" && contadorComa == 0) {
        document.getElementById("text").value = numero + ".";
        contadorComa++;
    }
}

function addParentesis() {
    var numero = document.getElementById("text").value;

    if (numero.substr(-1) != "." && numero.substr(-1) != "%" && numero.substr(-1) != "+" && numero.substr(-1) != "-" && numero.substr(-1) != "*" && numero.substr(-1) != "/" && numero.substr(-1) != ".") {
        document.getElementById("text").value = "(" + numero + ")";
    }
}

function addPorcentaje() {
    var numero = document.getElementById("text").value;

    if (numero.substr(-1) != "." && numero.substr(-1) != "+" && numero.substr(-1) != "-" && numero.substr(-1) != "*" && numero.substr(-1) != "/" && numero.substr(-1) != ".") {
        document.getElementById("text").value = numero + "%";
    }
}

function calcResultado() {
    var numero = document.getElementById("text").value;

    for (let i = 0; i < numero.length; i++) {
        if (numero.charAt(i) == "%") {
            contadorPorciento++;
        }
    }

    if (contadorPorciento == 0) {
        document.getElementById("text").value = eval(numero);
    } else {
        document.getElementById("text").value = calcularPorciento(numero);
    }
}

function calcularPorciento(numero) {
    var numeros = numero.split("%");
    numeros[0] = eval(numeros[0]);
    numeros[1] = eval(numeros[1]);

    return (numeros[0]*numeros[1])/100;

}

function pulsarTeclas(evObject) {

    var teclaPulsada = evObject.keyCode;

    if (teclaPulsada == 97) { document.getElementById("n1").click(); } // Tecla 1
    else if (teclaPulsada == 98) { document.getElementById("n2").click(); } // Tecla 2
    else if (teclaPulsada == 99) { document.getElementById("n3").click(); } // Tecla 3
    else if (teclaPulsada == 100) { document.getElementById("n4").click(); } // Tecla 4
    else if (teclaPulsada == 101) { document.getElementById("n5").click(); } // Tecla 5
    else if (teclaPulsada == 102) { document.getElementById("n6").click(); } // Tecla 6
    else if (teclaPulsada == 103) { document.getElementById("n7").click(); } // Tecla 7
    else if (teclaPulsada == 104){ document.getElementById("n8").click(); } // Tecla 8
    else if (teclaPulsada == 105) { document.getElementById("n9").click(); } // Tecla 9
    else if (teclaPulsada == 96) { document.getElementById("n0").click(); } // Tecla 0
    else if (teclaPulsada == 107) { document.getElementById("sumar").click(); } // Tecla +
    else if (teclaPulsada == 109) { document.getElementById("restar").click(); } // Tecla -
    else if (teclaPulsada == 106) { document.getElementById("multi").click(); } // Tecla *
    else if (teclaPulsada == 192) { document.getElementById("divi").click(); } // Tecla /
    else if (teclaPulsada == 110) { document.getElementById("punto").click(); } // Tecla .
    else if (teclaPulsada == 8) { document.getElementById("eli").click(); } // Tecla <<
    else if (teclaPulsada == 13) { document.getElementById("igual").click(); } // Tecla Intro
    else if (teclaPulsada == 56) { document.getElementById("paren").click(); } // Tecla (
    else if (teclaPulsada == 67) { document.getElementById("reset").click(); } // Tecla C
    else if (teclaPulsada == 53) { document.getElementById("porc").click(); } // Tecla %
}