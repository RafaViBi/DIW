var DNI = prompt('Dime tu DNI');
var correo
var telefono
var dirIP
var URL

function DNICorrecto(DNI) {
    
    var numero
    var letra
    var ExpDNI =/^\d{8}[a-zA-Z]$/;
    DNI = DNI.toUpperCase;

    if(ExpDNI.test(dni) == true){
        
        numero = dni.substr(0,dni.length-1);
        letr = dni.substr(dni.length-1,1);
        numero = numero % 23;
        letra='TRWAGMYFPDXBNJZSQVHLCKET';
        letra=letra.substring(numero,numero+1);

        if (letra!=letr.toUpperCase()) {

          alert('Dni erroneo, la letra del NIF no se corresponde');

        }else{

          alert('Dni correcto');

        }

    }else{

        alert('Dni erroneo, formato no válido');

    }

}