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

function validarDNI(x) {
    var numero
    var letra
    var ExpDNI = /^\d{8}[a-zA-Z]$/;
    var DNI = x.value
    dni = DNI.toUpperCase;

    if (ExpDNI.test(dni) == true) {

        numero = dni.substr(0, dni.length - 1);
        letr = dni.substr(dni.length - 1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substr(numero, numero + 1);

        if (letra != letr) {
            document.getElementById('dni').style.color = 'red';
        } else {
            document.getElementById('dni').style.color = 'green';
        }

    } else {

        document.getElementById('dni').style.color = 'red';

    }
}