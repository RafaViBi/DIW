var DNI = prompt('Dime tu DNI');
var correo = prompt('Dime tu correo');
var telefono = prompt('Dime tu telefono');
var dirIP = prompt('Dime tu direccion IP');
var URL = prompt('Dime tu URL'); 


if (DNICorrecto(DNI)) {
    document.write("El DNI es correcto.");
} else {
    document.write("El DNI no es correcto.");
} 



if (correoCorrecto(correo)) {
    document.write(" <br> " + "El correo electronico es correcto.");
} else {
    document.write(" <br> " + "El correo electronico no es correcto.");
} 



if (telCorrecto(telefono)) {
    document.write(" <br> " + "El telefono es correcto.");
} else {
    document.write(" <br> " + "El telefono no es correcto.");
} 



if (dirIPCorrecta(dirIP)) {
    document.write(" <br> " + "La dirección IP es correcta.");
} else {
    document.write(" <br> " + "La dirección IP no es correcta.");
}



if (urlCorrecta(URL)) {
    document.write(" <br> " + "La URL es correcta.");
} else {
    document.write(" <br> " + "La URL no es correcta.");
}

function DNICorrecto(DNI) {
    
    var numero
    var letra
    var ExpDNI =/^[0-9]{8}[a-zA-Z]{1}/;
    dni = DNI.toUpperCase;

    if(ExpDNI.test(dni) == true){
        
        numero = dni.substr(0,dni.length-1);
        letr = dni.substr(dni.length-1,1);
        numero = numero % 23;
        letra='TRWAGMYFPDXBNJZSQVHLCKET';
        letra=letra.substr(numero,numero+1);

        if (letra!=letr) {

            return false;

        }else{

            return true;

        }

    }else{

        return false;

    }

}

function correoCorrecto(correo) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(correo);
}

function telCorrecto(telefono) {
    return /^(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}$/.test(telefono);
}

function dirIPCorrecta(dirIP) {
    return /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(dirIP);
}

function urlCorrecta(URL) {
    return /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})$/.test(URL);
}