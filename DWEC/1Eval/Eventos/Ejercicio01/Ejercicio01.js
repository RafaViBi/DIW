function validarEmail(x) {

    email = x.value;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
        document.getElementById('email').style.color = 'green';
    } else {
        document.getElementById('email').style.color = 'red';
    }
}

function validarIp(x) {

    dirIP = x.value

    if (/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(dirIP)) {
        document.getElementById('ip').style.color = 'green';
    } else {
        document.getElementById('ip').style.color = 'red';
    }
}

function validarDNI(dni) {
    var numero
    var letr
    var letra
    var expresion_regular_dni

    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    if (expresion_regular_dni.test((dni.value)) == true) {
        numero = (dni.value).substr(0, (dni.value).length - 1);
        letr = (dni.value).substr((dni.value).length - 1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero + 1);
        if (letra != letr.toUpperCase()) {
            document.getElementById('dni').style.color = 'red';
        } else {
            document.getElementById("dni").style.color = 'green'; //Cambiar de color a verde si esta bien
        }
    } else {
        document.getElementById('dni').style.color = 'red';
    }
}