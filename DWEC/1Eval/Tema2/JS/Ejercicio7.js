var filas = prompt("Dime las filas de la piramide:");

for (let i = 1; i <= filas; i++) {

    for (let j = 0; j < i; j++) {

        document.write("* ");
        
    }

    document.write("<br>");
    
}