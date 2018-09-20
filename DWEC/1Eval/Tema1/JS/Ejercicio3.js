var DNI = prompt('Dime tu DNI');
var correo
var telefono
var dirIP
var URL

function DNICorrecto(DNI) {
    
    var numero
    var letra
    var ExpDNI =/^[0-9]{8}[a-zA-Z]{1}/;
    DNI = DNI.toUpperCase;

    if(ExpDNI.test(dni) == true){
        
        numero = dni.substr(0,dni.length-1);
        letr = dni.substr(dni.length-1,1);
        numero = numero % 23;
        letra='TRWAGMYFPDXBNJZSQVHLCKET';
        letra=letra.substr(numero,numero+1);

        if (letra!=letr) {

            document.write('Tu DNI no es correcto ');

        }else{

            document.write('Dni correcto');

        }

    }else{

        document.write('Dni erroneo, formato no válido');

    }

}