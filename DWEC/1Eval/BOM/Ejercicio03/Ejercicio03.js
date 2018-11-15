window.addEventListener("load", cargar, false);

var jugador = 1;
var celdas = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

function cargar() {
    document.getElementById("celda0").addEventListener("click", jugar);
    document.getElementById("celda1").addEventListener("click", jugar);
    document.getElementById("celda2").addEventListener("click", jugar);
    document.getElementById("celda3").addEventListener("click", jugar);
    document.getElementById("celda4").addEventListener("click", jugar);
    document.getElementById("celda5").addEventListener("click", jugar);
    document.getElementById("celda6").addEventListener("click", jugar);
    document.getElementById("celda7").addEventListener("click", jugar);
    document.getElementById("celda8").addEventListener("click", jugar);
}

function jugar() {
    if (jugador == 1) {
        if (this.innerHTML == "") {
            this.innerHTML = "X";
            jugador++;
            var cadena = this.id;
            var n = cadena.substr(-1);
            eliminarArray(n);
            comprobarVictoriaJugador(this);
            jugarCPU();
        }
    }
}

function eliminarArray(n) {

    for (let i = 0; i < celdas.length; i++) {
        if (n == celdas[i]) {
            var index = celdas.indexOf(n);
            celdas.splice(index, 1);
        }
    }
}

function comprobarVictoriaCPU() {

    //HORIZONTAL
    if (document.getElementById("celda0").innerHTML == "O" && document.getElementById("celda1").innerHTML == "O" && document.getElementById("celda2").innerHTML == "O") {
        alert("Victoria CPU");
        location.reload();
    }

    if (document.getElementById("celda3").innerHTML == "O" && document.getElementById("celda4").innerHTML == "O" && document.getElementById("celda5").innerHTML == "O") {
        alert("Victoria CPU");
        location.reload();
    }

    if (document.getElementById("celda6").innerHTML == "O" && document.getElementById("celda7").innerHTML == "O" && document.getElementById("celda8").innerHTML == "O") {
        alert("Victoria CPU");
        location.reload();
    }

    //DIAGONAL
    if (document.getElementById("celda0").innerHTML == "O" && document.getElementById("celda4").innerHTML == "O" && document.getElementById("celda8").innerHTML == "O") {
        alert("Victoria CPU");
        location.reload();
    }

    if (document.getElementById("celda2").innerHTML == "O" && document.getElementById("celda4").innerHTML == "O" && document.getElementById("celda6").innerHTML == "O") {
        alert("Victoria CPU");
        location.reload();
    }

    //VERTICAL
    if (document.getElementById("celda0").innerHTML == "O" && document.getElementById("celda3").innerHTML == "O" && document.getElementById("celda6").innerHTML == "O") {
        alert("Victoria CPU");
        location.reload();
    }

    if (document.getElementById("celda1").innerHTML == "O" && document.getElementById("celda4").innerHTML == "O" && document.getElementById("celda7").innerHTML == "O") {
        alert("Victoria CPU");
        location.reload();
    }

    if (document.getElementById("celda2").innerHTML == "O" && document.getElementById("celda5").innerHTML == "O" && document.getElementById("celda8").innerHTML == "O") {
        alert("Victoria CPU");
        location.reload();
    }
}

function comprobarVictoriaJugador() {

    //HORIZONTAL
    if (document.getElementById("celda0").innerHTML == "X" && document.getElementById("celda1").innerHTML == "X" && document.getElementById("celda2").innerHTML == "X") {
        alert("Victoria Jugador");
        location.reload();
    }

    if (document.getElementById("celda3").innerHTML == "X" && document.getElementById("celda4").innerHTML == "X" && document.getElementById("celda5").innerHTML == "X") {
        alert("Victoria Jugador");
        location.reload();
    }

    if (document.getElementById("celda6").innerHTML == "X" && document.getElementById("celda7").innerHTML == "X" && document.getElementById("celda8").innerHTML == "X") {
        alert("Victoria Jugador");
        location.reload();
    }

    //DIAGONAL
    if (document.getElementById("celda0").innerHTML == "X" && document.getElementById("celda4").innerHTML == "X" && document.getElementById("celda8").innerHTML == "X") {
        alert("Victoria Jugador");
        location.reload();
    }

    if (document.getElementById("celda2").innerHTML == "X" && document.getElementById("celda4").innerHTML == "X" && document.getElementById("celda6").innerHTML == "X") {
        alert("Victoria Jugador");
        location.reload();
    }

    //VERTICAL
    if (document.getElementById("celda0").innerHTML == "X" && document.getElementById("celda3").innerHTML == "X" && document.getElementById("celda6").innerHTML == "X") {
        alert("Victoria Jugador");
        location.reload();
    }

    if (document.getElementById("celda1").innerHTML == "X" && document.getElementById("celda4").innerHTML == "X" && document.getElementById("celda7").innerHTML == "X") {
        alert("Victoria Jugador");
        location.reload();
    }

    if (document.getElementById("celda2").innerHTML == "X" && document.getElementById("celda5").innerHTML == "X" && document.getElementById("celda8").innerHTML == "X") {
        alert("Victoria Jugador");
        location.reload();
    }
}

function jugarCPU() {

    var eleccionCPU = Math.floor(Math.random() * celdas.length);

    if (document.getElementById("celda" + eleccionCPU).innerHTML == "") {
        console.log("----" + eleccionCPU + "----");
        document.getElementById("celda" + eleccionCPU).innerHTML = "O";
        jugador--;
        celdas.splice(eleccionCPU, 1);
        for (let index = 0; index < celdas.length; index++) {
            console.log(celdas[index]);
        }
        comprobarVictoriaCPU(this);
    } else {
        jugarCPU();
    }
}