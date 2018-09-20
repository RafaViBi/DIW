var nombre=prompt('Tamaño del array:','');
        max = 0;

        for (let index = 0; index < nombre; index++) {
            
            var numero = prompt('Dime el número:','');
            
            if(max < numero){

                max = numero;

            }

        }
        
    document.write("El número más alto es: " + max + ".");