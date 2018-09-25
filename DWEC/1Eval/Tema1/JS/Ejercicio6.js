document.write(decirMes("10/11/2009"));

function decirMes(fecha) {
    
    var meses = ["Enero", "Febrero", "Marzo","Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre","Octubre", "Noviembre", "Diciembre"];
    mes = fecha.split("/");

    return meses[mes[1]-1];

}