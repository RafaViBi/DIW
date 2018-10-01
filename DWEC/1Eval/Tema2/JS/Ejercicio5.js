var mes = prompt("Mes");
var anyo = prompt("Año");
var dias = diasMes(mes,anyo);

function diasMes(mes,anyo) {
    return new Date(anyo,mes,0).getDate();
}

document.write("Cantidad de días del mes " + mes + ":" + dias);