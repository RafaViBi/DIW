function beHappy(value) {

    let repeat = [];

    //Comprueba si el valor es mayor que 1 o repetido para evitar el bucle infinito
    while (value > 1 && !~repeat.indexOf(value)) {
      let result = 0;

        //Agrega el valor a la variable para evitar un bucle infinito
        repeat.push(value);

        //Separa el string en pedazos
        for (let n of value.toString().split("")) {

        //Utiliza la funcion Math.pow para calcular la base elevada al exponente
        result += Math.pow(n, 2)
        }
  
        value = result;
    }
  
    return value == 1;
}
  
for (let i = 0; i <= 20; i++) {

    if (beHappy(i)) {

        document.write(i + ", ");

    }

}