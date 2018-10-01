var texto = prompt("Dime una frase:");
var cantidad = prompt("Caracteres para extraer:");
var comienzo = prompt("Principio o Fin");
var tamaño = 0;

extraer(texto,cantidad,comienzo);

function extraer(texto, cantidad, comienzo) {
    
    frase = texto.split('');
    long = frase.length;
    long = long - cantidad;

    if (comienzo == "fin") {
        
        for (let i = 0; i < cantidad; i++) {
        
            document.write(frase[long + i]);
            
        }

    } else {
        
        for (let i = 0; i < cantidad; i++) {
        
            document.write(frase[i]);
            
        }

    }

}